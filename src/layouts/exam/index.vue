<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRoute, onBeforeRouteLeave, useRouter } from 'vue-router';
import {
  ElContainer,
  ElAside,
  ElMain,
  ElEmpty,
  ElMessage,
  ElButton,
  ElMessageBox
} from 'element-plus';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import { Refresh } from '@element-plus/icons-vue';
import { http } from '@/common/utils/http';
import {
  ExamSubmitRequestType,
  ExamAnswerSheetSubmitApi,
  IExamAnswerSheetSubmitResponse
} from '@/services/exam';
import {
  PaperQuestionListApi,
  PaperQuestionListResponseType
} from '@/services/paper';
import { IPaperQuestion } from '@/common/models/paper';
import styles from './index.module.scss';
import AsideButton from './components/aside-button.vue';
import { CurrentQuestionStatusType, ArrowKeyEnum } from './type';
import {
  FillQuestionByIdApi,
  JudgeQuestionByIdApi,
  MultiQuestionByIdApi
} from '@/services/question';
import MultiAnswerSheet from './components/multi-answer-sheet.vue';
import JudgeAnswerSheet from './components/judge-answer-sheet.vue';
import FillAnswerSheet from './components/fill-answer-sheet.vue';
import { useToggle } from '@/common/hooks';
import HeaderSwitch from './components/header-switch.vue';
import { LocalExamDriverKey } from '@/common/models/store-keys';
import { getLocalItem, setLocalItem } from '@/common/utils/local-storage';
import { driverStepConfig } from './config';
import { QuestionTypeEnum } from '@/common/models/question';
import { useUserConfigStore } from '@/store';
import { RouterNameEnum } from '@/router/type';

const userConfigStore = useUserConfigStore();
const route = useRoute();
const router = useRouter();
const {
  isActive: hasError,
  onActive: onHasError,
  onUnActive: onHasNotError
} = useToggle();
const { isActive: isChecked, onActive: onIsChecked } = useToggle();
const { isActive: isLoading, onToggle: onLoadingToggle } = useToggle(true);
const { isActive: isContainerLoading, onToggle: onContainerLoadingToggle } =
  useToggle();
const score = ref(-1);
const studentAnswers = ref<ExamSubmitRequestType[]>([]);
const questions = ref<IPaperQuestion[]>([]);
const currentQuestion = ref<any>({});
const currentState = reactive<CurrentQuestionStatusType>({
  questionId: 0,
  questionType: 1,
  index: -1
});
const selectedAnswer = computed(() => {
  const ans = studentAnswers.value.find(
    (item) =>
      item.questionId === currentQuestion.value.questionId &&
      item.questionType === currentState.questionType
  );
  return ans;
});
const answerSheetComponent = computed(() =>
  currentState.questionType === QuestionTypeEnum.Multi
    ? MultiAnswerSheet
    : currentState.questionType === QuestionTypeEnum.Fill
    ? FillAnswerSheet
    : JudgeAnswerSheet
);

const handleWindowRefresh = (e) => {
  e.returnValue = '';
  return '离开页面当前进度将不会保存！';
};

const handleWindowKeyUp = (e: KeyboardEvent) => {
  if (e.target !== document.querySelector('#fill-input')) {
    e.code === ArrowKeyEnum.LeftKey && handleClickPrev();
    e.code === ArrowKeyEnum.RightKey && handleClickNext();
  }
};

const fetchQuestionData = async () => {
  try {
    onLoadingToggle();
    const { questionType } = currentState;
    const question = questions.value[currentState.index];
    const api =
      questionType === QuestionTypeEnum.Multi
        ? MultiQuestionByIdApi
        : questionType === QuestionTypeEnum.Judge
        ? JudgeQuestionByIdApi
        : FillQuestionByIdApi;
    const { data } = await http.getRequest(`${api}/${question?.questionId}`);
    currentQuestion.value = data;
    onHasNotError();
  } catch (error) {
    onHasError();
    ElMessage.error('获取题目失败，请稍后重试');
  } finally {
    onLoadingToggle();
  }
};

const handleQuestionChange = (info: CurrentQuestionStatusType) => {
  currentState.questionId = info.questionId;
  currentState.questionType = info.questionType;
  currentState.index = info.index;
  fetchQuestionData();
};

const handleSelectedAnswer = (answer: string) => {
  const ans = studentAnswers.value.find(
    (item) =>
      item.questionId === currentState.questionId &&
      item.questionType === currentState.questionType
  );
  ans
    ? (ans.studentAnswer = answer)
    : studentAnswers.value.push({
        studentAnswer: answer,
        questionId: currentState.questionId,
        questionType: currentState.questionType
      });
};

const handleClickPrev = () => {
  const { index } = currentState;
  if (index === 0 || index === -1) {
    ElMessage.warning('这就是第一题啦！');
    return;
  }
  const nextQuestion = questions.value[currentState.index - 1];
  currentState.questionId = nextQuestion.questionId;
  currentState.questionType = nextQuestion.questionType;
  currentState.index = currentState.index - 1;
  fetchQuestionData();
};

const handleClickNext = () => {
  const { index } = currentState;
  if (index === questions.value.length - 1) {
    ElMessage.warning('已经最后一题啦！');
    return;
  }
  const nextQuestion = questions.value[index + 1];
  currentState.questionId = nextQuestion.questionId;
  currentState.questionType = nextQuestion.questionType;
  currentState.index = currentState.index + 1;
  fetchQuestionData();
};

const handleSubmitAnswer = async () => {
  const isAllDone = questions.value.length === studentAnswers.value.length;
  onIsChecked();
  await ElMessageBox.confirm(
    `${isAllDone ? '' : '题目未全部完成，'}确定要提交答题卡吗？`,
    '提示',
    {
      cancelButtonText: '取消',
      confirmButtonText: '确定'
    }
  );
  try {
    onContainerLoadingToggle();
    const { examCode } = route.params;
    const { userConfig } = userConfigStore;
    const { data } = await http.postRequest<IExamAnswerSheetSubmitResponse>(
      ExamAnswerSheetSubmitApi(examCode as string, userConfig.studentId),
      studentAnswers.value
    );
    score.value = data.score;
    router.replace({
      name: RouterNameEnum.ExamResult,
      params: { result: data.score }
    });
  } catch (error) {
    // no-console
  } finally {
    onContainerLoadingToggle();
  }
};

const startExamDriver = () => {
  const driver = new Driver();
  driver.defineSteps(driverStepConfig);
  driver.start();
  setLocalItem(LocalExamDriverKey, 'EXAM_DRIVER');
};

onBeforeRouteLeave(async () => {
  if (score.value !== -1) {
    return true;
  }
  // eslint-disable-next-line no-alert
  const result = window.confirm('离开页面当前的题目进度将不会保存！');
  if (!result) return false;
});

onMounted(async () => {
  window.addEventListener('keyup', handleWindowKeyUp);
  window.addEventListener('beforeunload', handleWindowRefresh);
  try {
    const { paperId } = route.params;
    const { data } = await http.getRequest<PaperQuestionListResponseType>(
      `${PaperQuestionListApi}/${paperId}`
    );
    questions.value = data;
    currentState.questionType = data[0].questionType;
  } catch (error) {
    ElMessage.error('获取题目信息失败，请稍后刷新重试！');
  } finally {
    onLoadingToggle();
  }
  !getLocalItem(LocalExamDriverKey) && startExamDriver();
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleWindowKeyUp);
  window.removeEventListener('beforeunload', handleWindowRefresh);
});
</script>

<template>
  <div class="h-full bg-gray-50 outline-none" tabindex="0">
    <ElContainer
      v-loading="isContainerLoading"
      class="h-full"
      element-loading-text="正在提交答题卡"
    >
      <ElAside
        id="question-select"
        :class="styles.examAside"
        class="p-4 bg-white"
      >
        <span v-for="(question, index) in questions" :key="index">
          <AsideButton
            :is-checked="isChecked"
            :index="index + 1"
            :current="currentState"
            :question="question"
            :student-answers="studentAnswers"
            @on-click="handleQuestionChange"
          />
        </span>
      </ElAside>
      <ElContainer id="answer-sheet">
        <ElMain
          v-loading="isLoading"
          class="bg-white m-4 min-w-fit"
          element-loading-text="正在加载题目"
        >
          <template v-if="currentQuestion.questionId && !hasError">
            <HeaderSwitch
              class="mb-6"
              :total="questions.length"
              :current-index="currentState.index"
              :current-length="studentAnswers.length"
              @on-click-prev="handleClickPrev"
              @on-click-next="handleClickNext"
              @on-submit-answer="handleSubmitAnswer"
            />
            <Component
              :is="answerSheetComponent"
              :key="currentQuestion"
              :question="currentQuestion"
              :student-answer="selectedAnswer?.studentAnswer"
              @on-selected="handleSelectedAnswer"
            />
          </template>
          <ElEmpty v-else-if="hasError" description="请尝试重新获取题目">
            <ElButton
              :icon="Refresh"
              type="warning"
              plain
              @click="fetchQuestionData"
            >
              重新获取题目
            </ElButton>
          </ElEmpty>
          <ElEmpty v-else description="点击侧边按钮答题" />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>
