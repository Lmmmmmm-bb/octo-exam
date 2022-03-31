<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import {
  ElContainer,
  ElAside,
  ElMain,
  ElMessageBox,
  ElEmpty,
  ElMessage,
  ElButton
} from 'element-plus';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import { Refresh } from '@element-plus/icons-vue';
import { http } from '@/common/utils/http';
import { ExamSubmitRequestType } from '@/services/exam';
import {
  PaperQuestionListApi,
  PaperQuestionListResponseType
} from '@/services/paper';
import { IPaperQuestion } from '@/common/models/paper';
import styles from './index.module.scss';
import AsideButton from './components/aside-button.vue';
import { CurrentQuestionStatusType } from './type';
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
import { ArrowKeyEnum, driverStepConfig } from './config';

const route = useRoute();
const {
  isActive: hasError,
  onActive: onHasError,
  onUnActive: onHasNotError
} = useToggle();
const { isActive: isLoading, onToggle: onLoadingToggle } = useToggle(true);
const studentAnswers = ref<ExamSubmitRequestType[]>([]);
const questions = ref<IPaperQuestion[]>([]);
const currentQuestion = ref<any>({});
const currentState = reactive<CurrentQuestionStatusType>({
  questionId: 0,
  questionType: 1
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
  currentState.questionType === 1
    ? MultiAnswerSheet
    : currentState.questionType === 2
    ? JudgeAnswerSheet
    : FillAnswerSheet
);

const handleWindowUnload = () => '离开页面当前进度将不会保存！';

const handleQuestionChange = (info: CurrentQuestionStatusType) => {
  currentState.questionId = info.questionId;
  currentState.questionType = info.questionType;
};

watch(
  () => [currentState.questionId, currentState.questionType],
  async () => {
    try {
      onLoadingToggle();
      const { questionType, questionId } = currentState;
      const question = questions.value.find(
        (item) =>
          item.questionType === questionType && item.questionId === questionId
      );
      const api =
        questionType === 1
          ? MultiQuestionByIdApi
          : questionType === 2
          ? JudgeQuestionByIdApi
          : FillQuestionByIdApi;
      const { data } = await http.getRequest(`${api}/${question?.questionId}`);
      currentQuestion.value = data;
      onHasNotError();
    } catch (error) {
      onHasError();
      ElMessage.error({
        message: '获取题目失败'
      });
      // no-console
    } finally {
      onLoadingToggle();
    }
  }
);

const handleSelectedAnswer = (answer: string) => {
  const ans = studentAnswers.value.find(
    (item) =>
      item.questionId === currentQuestion.value.questionId &&
      item.questionType === currentState.questionType
  );
  ans
    ? (ans.studentAnswer = answer)
    : studentAnswers.value.push({
        studentAnswer: answer,
        questionId: currentQuestion.value.questionId,
        questionType: currentState.questionType
      });
};

const handleKeyUp = (e: KeyboardEvent) => {
  console.log(e.code === ArrowKeyEnum.LeftKey);
};

const showExamDriver = () => {
  const driver = new Driver();
  driver.defineSteps(driverStepConfig);
  driver.start();
  setLocalItem(LocalExamDriverKey, 'EXAM_DRIVER');
};

onBeforeRouteLeave(async () => {
  await ElMessageBox.confirm('离开页面当前进度将不会保存！', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  });
});

onMounted(async () => {
  window.addEventListener('beforeunload', handleWindowUnload);
  try {
    onLoadingToggle();
    const { id } = route.params;
    const { data } = await http.getRequest<PaperQuestionListResponseType>(
      `${PaperQuestionListApi}/${id}`
    );
    questions.value = data;
    currentState.questionType = data[0].questionType;
  } catch (error) {
    // no-console
  }
  !getLocalItem(LocalExamDriverKey) && showExamDriver();
});

onUnmounted(() =>
  window.removeEventListener('beforeunload', handleWindowUnload)
);
</script>

<template>
  <div class="h-full bg-gray-50" tabindex="0" @keyup="handleKeyUp">
    <ElContainer class="h-full">
      <ElAside
        id="question-select"
        :class="styles.examAside"
        class="p-4 bg-white"
      >
        <span v-for="(question, index) in questions" :key="index">
          <AsideButton
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
          class="bg-white m-4"
          element-loading-text="正在加载题目"
        >
          <template v-if="currentQuestion.questionId && !hasError">
            <HeaderSwitch
              :current-length="studentAnswers.length"
              :total="questions.length"
              class="mb-6"
            />
            <Component
              :is="answerSheetComponent"
              :key="+new Date()"
              :question="currentQuestion"
              :student-answer="selectedAnswer?.studentAnswer"
              @on-selected="handleSelectedAnswer"
            />
          </template>
          <ElEmpty v-else-if="hasError" description="请尝试重新获取题目">
            <ElButton :icon="Refresh" type="warning" plain>
              重新获取题目
            </ElButton>
          </ElEmpty>
          <ElEmpty v-else description="点击侧边按钮答题" />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>
