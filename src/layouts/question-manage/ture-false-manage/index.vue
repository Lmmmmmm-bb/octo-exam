<script setup lang="ts">
import { ElDivider } from 'element-plus';
import Breadcrumb from '@/components/breadcrumb/index.vue';
</script>

<template>
  <div class="outerWrapper">
    <Breadcrumb :path="[{ text: '判断题题库' }]" />
    <ElDivider />
  </div>
</template>
