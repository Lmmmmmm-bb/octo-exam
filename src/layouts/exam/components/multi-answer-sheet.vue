<script setup lang="ts">
import { defineProps, ref, defineEmits, watch } from 'vue';
import { ElDescriptions, ElDescriptionsItem, ElRadio } from 'element-plus';
import { IMultiQuestion } from '@/common/models/question';

const emits = defineEmits<{
  (e: 'onSelected', answer: string): void;
}>();

const props = defineProps<{
  question: IMultiQuestion;
  studentAnswer?: string;
}>();

const answer = ref(props.studentAnswer || '');

watch(
  () => answer.value,
  () => emits('onSelected', answer.value)
);
</script>

<template>
  <ElDescriptions :column="1">
    <ElDescriptionsItem>
      {{ props.question.question }}
    </ElDescriptionsItem>
    <ElDescriptionsItem>
      <ElRadio v-model="answer" label="A" border>
        {{ props.question.answerA }}
      </ElRadio>
    </ElDescriptionsItem>
    <ElDescriptionsItem>
      <ElRadio v-model="answer" label="B" border>
        {{ props.question.answerB }}
      </ElRadio>
    </ElDescriptionsItem>
    <ElDescriptionsItem>
      <ElRadio v-model="answer" label="C" border>
        {{ props.question.answerC }}
      </ElRadio>
    </ElDescriptionsItem>
    <ElDescriptionsItem>
      <ElRadio v-model="answer" label="D" border>
        {{ props.question.answerD }}
      </ElRadio>
    </ElDescriptionsItem>
  </ElDescriptions>
</template>
