<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import {
  ElContainer,
  ElAside,
  ElMain,
  ElMessageBox,
  ElEmpty
} from 'element-plus';
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

const route = useRoute();
const { onToggle: onLoadingToggle } = useToggle();
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
    } catch (error) {
      // no-console
    }
  }
);

const handleSelectedAnswer = (answer: string) => {
  const ans = studentAnswers.value.find(
    (item) =>
      item.questionId === currentQuestion.value.questionId &&
      item.questionType === currentState.questionType
  );
  if (!ans) {
    studentAnswers.value.push({
      studentAnswer: answer,
      questionId: currentQuestion.value.questionId,
      questionType: currentState.questionType
    });
  } else {
    ans.studentAnswer = answer;
  }
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
});

onUnmounted(() =>
  window.removeEventListener('beforeunload', handleWindowUnload)
);
</script>

<template>
  <div class="h-full bg-gray-50">
    <ElContainer class="h-full">
      <ElAside :class="styles.examAside" class="p-4 bg-white">
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
      <ElContainer>
        <ElMain class="bg-white m-4">
          <Component
            :is="answerSheetComponent"
            v-if="currentQuestion.questionId"
            :key="+new Date()"
            :question="currentQuestion"
            :student-answer="selectedAnswer?.studentAnswer"
            @on-selected="handleSelectedAnswer"
          />
          <ElEmpty v-else description="点击侧边按钮答题" />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>
