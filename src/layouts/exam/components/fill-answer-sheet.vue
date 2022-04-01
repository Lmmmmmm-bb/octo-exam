<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { ElDescriptions, ElDescriptionsItem, ElInput } from 'element-plus';
import { IFillQuestion } from '@/common/models/question';

const emits = defineEmits<{
  (e: 'onSelected', answer: string): void;
}>();

const props = defineProps<{
  question: IFillQuestion;
  studentAnswer?: string;
}>();

const inputRef = ref<HTMLInputElement>();
const answer = ref(props.studentAnswer || '');

const handleInputChange = () => {
  emits('onSelected', answer.value);
};

onMounted(() => inputRef.value && inputRef.value.focus());
</script>

<template>
  <ElDescriptions :column="1">
    <ElDescriptionsItem>
      {{ props.question.question }}
    </ElDescriptionsItem>
    <ElDescriptionsItem>
      <ElInput
        ref="inputRef"
        v-model="answer"
        type="textarea"
        placeholder="在这里输入答案"
        :autosize="{ minRows: 4 }"
        @input="handleInputChange"
      />
    </ElDescriptionsItem>
  </ElDescriptions>
</template>
