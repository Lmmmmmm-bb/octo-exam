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
  isChecked: boolean;
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
  return !!ans && ans.studentAnswer.length !== 0;
});

const buttonType = computed(() => {
  if (props.isChecked && !hasAnswer.value) {
    return 'danger';
  }
  return isCurrentQuestion.value || hasAnswer.value ? 'primary' : 'default';
});

const handleBtnClick = () =>
  emits('onClick', {
    questionId: props.question.questionId,
    questionType: props.question.questionType,
    index: props.index - 1
  });
</script>

<template>
  <ElButton
    style="width: 32px; height: 32px"
    :type="buttonType"
    :plain="!isCurrentQuestion"
    circle
    @click="handleBtnClick"
  >
    {{ props.index }}
  </ElButton>
</template>
