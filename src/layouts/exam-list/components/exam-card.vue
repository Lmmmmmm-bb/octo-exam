<script setup lang="ts">
import { defineEmits } from 'vue';
import { Timer, Calendar, Reading } from '@element-plus/icons-vue';
import { ElCard, ElIcon } from 'element-plus';
import styles from './index.module.scss';

const emits = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <ElCard :class="styles.examCard" shadow="hover" @click="emits('click')">
    <template #header>
      <h3 class="font-medium">计算机网络</h3>
    </template>
    <p class="text-gray-500">计算机网络 - 2019 上期期末考试</p>
    <div class="flex items-center justify-evenly mt-20">
      <span class="text-sm flex items-center">
        <ElIcon color="#409EFF" style="margin-right: 4px">
          <Calendar />
        </ElIcon>
        2022-03-10
      </span>
      <span class="text-sm flex items-center">
        <ElIcon color="#409EFF" style="margin-right: 4px">
          <Timer />
        </ElIcon>
        120 分钟
      </span>
      <span class="text-sm flex items-center">
        <ElIcon color="#409EFF" style="margin-right: 4px">
          <Reading />
        </ElIcon>
        满分 100 分
      </span>
    </div>
  </ElCard>
</template>
