<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { ElDescriptions, ElDescriptionsItem, ElInput } from 'element-plus';
import { IFillQuestion } from '@/common/models/question';

const emits = defineEmits<{
  (e: 'onSelected', answer: string): void;
}>();

const props = defineProps<{
  question: IFillQuestion;
  studentAnswer?: string;
}>();

const answer = ref(props.studentAnswer || '');

const handleInputChange = () => {
  emits('onSelected', answer.value);
};
</script>

<template>
  <ElDescriptions :column="1">
    <ElDescriptionsItem>
      {{ props.question.question }}
    </ElDescriptionsItem>
    <ElDescriptionsItem>
      <ElInput
        id="fill-input"
        v-model="answer"
        type="textarea"
        placeholder="在这里输入答案"
        :autosize="{ minRows: 4 }"
        @input="handleInputChange"
      />
    </ElDescriptionsItem>
  </ElDescriptions>
</template>
