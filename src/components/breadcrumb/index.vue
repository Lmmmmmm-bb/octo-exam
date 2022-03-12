<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { IBreadcrumnInfo } from './type';

const props = withDefaults(
  defineProps<{
    path: IBreadcrumnInfo[];
  }>(),
  { path: () => [] }
);
</script>

<template>
  <ElBreadcrumb style="line-height: 34px">
    <ElBreadcrumbItem v-for="{ text, to } in props.path" :key="text" :to="to">
      {{ text }}
    </ElBreadcrumbItem>
  </ElBreadcrumb>
</template>
