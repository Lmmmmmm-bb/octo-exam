<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';
import { Close, Check } from '@element-plus/icons-vue';
import {
  ElDescriptions,
  ElDescriptionsItem,
  ElRadio,
  ElIcon
} from 'element-plus';
import { IJudgeQuestion } from '@/common/models/question';

const emits = defineEmits<{
  (e: 'onSelected', answer: string): void;
}>();

const props = defineProps<{
  question: IJudgeQuestion;
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
      <ElRadio v-model="answer" label="T" border>
        <ElIcon color="#46a655" :size="18">
          <Check />
        </ElIcon>
      </ElRadio>
    </ElDescriptionsItem>
    <ElDescriptionsItem>
      <ElRadio v-model="answer" label="F" border>
        <ElIcon color="#b92222" :size="18">
          <Close />
        </ElIcon>
      </ElRadio>
    </ElDescriptionsItem>
  </ElDescriptions>
</template>
