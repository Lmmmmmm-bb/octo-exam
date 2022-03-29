<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import { Timer, Calendar, Reading } from '@element-plus/icons-vue';
import { ElCard, ElIcon } from 'element-plus';
import styles from './index.module.scss';
import { IExam } from '@/common/models/exam';

const emits = defineEmits<{
  (e: 'onClick'): void;
}>();

const props = defineProps<{
  exam: IExam;
}>();
</script>

<template>
  <ElCard :class="styles.examCard" shadow="hover" @click="emits('onClick')">
    <template #header>
      <h3 class="font-medium">{{ props.exam.source }}</h3>
    </template>
    <p class="text-gray-500">
      {{ props.exam.source }} - {{ props.exam.description }}
    </p>
    <p class="mt-2">{{ props.exam.tips }}</p>
    <div class="flex items-center justify-evenly mt-16">
      <span class="text-sm flex items-center">
        <ElIcon color="#409EFF" style="margin-right: 4px">
          <Calendar />
        </ElIcon>
        <span>{{ props.exam.examDate }}</span>
      </span>
      <span class="text-sm flex items-center">
        <ElIcon color="#409EFF" style="margin-right: 4px">
          <Timer />
        </ElIcon>
        <span>{{ props.exam.totalTime }} 分钟</span>
      </span>
      <span class="text-sm flex items-center">
        <ElIcon color="#409EFF" style="margin-right: 4px">
          <Reading />
        </ElIcon>
        <span>满分 {{ props.exam.totalScore }} 分</span>
      </span>
    </div>
  </ElCard>
</template>
