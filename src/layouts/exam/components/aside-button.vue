<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { ElButton } from 'element-plus';
import { CurrentQuestionStatusType } from '../type';
import { ExamSubmitRequestType } from '@/services/exam';
import { IPaperQuestion } from '@/common/models/paper';

const emits = defineEmits<{
  (e: 'onClick', current: CurrentQuestionStatusType): void;
}>();

const props = defineProps<{
  index: number;
  current: CurrentQuestionStatusType;
  studentAnswers: ExamSubmitRequestType[];
  question: IPaperQuestion;
}>();

const isCurrentQuestion = computed(() => {
  const { question, current } = props;
  const { questionId, questionType } = current;
  return (
    question.questionId === questionId && question.questionType === questionType
  );
});

const hasAnswer = computed(() => {
  const { question, studentAnswers } = props;
  const ans = studentAnswers.find(
    (item) =>
      item.questionId === question.questionId &&
      item.questionType === question.questionType
  );
  return !!ans;
});

const handleBtnClick = () =>
  emits('onClick', {
    questionId: props.question.questionId,
    questionType: props.question.questionType
  });
</script>

<template>
  <ElButton
    style="width: 32px; height: 32px"
    :type="isCurrentQuestion || hasAnswer ? 'primary' : 'default'"
    :plain="!isCurrentQuestion && hasAnswer"
    circle
    @click="handleBtnClick"
  >
    {{ props.index }}
  </ElButton>
</template>
