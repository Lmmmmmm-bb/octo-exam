<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { ElCard, ElDescriptions, ElDescriptionsItem } from 'element-plus';
import { IMultiQuestion } from '@/common/models/question';

const emits = defineEmits<{
  (e: 'onClick'): void;
}>();

const props = defineProps<{ question: IMultiQuestion }>();
</script>

<template>
  <ElCard shadow="hover" class="cursor-pointer" @click="emits('onClick')">
    <template #header>{{ props.question.question }}</template>
    <ElDescriptions :column="1">
      <ElDescriptionsItem label="A">
        {{ props.question.answerA }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="B">
        {{ props.question.answerB }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="C">
        {{ props.question.answerC }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="D">
        {{ props.question.answerD }}
      </ElDescriptionsItem>
    </ElDescriptions>
  </ElCard>
</template>
