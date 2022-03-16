<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RouterNameEnum } from '@/router/type';
import StudentTable from './components/student-table.vue';
import Breadcrumb from '@/components/breadcrumb/index.vue';

const router = useRouter();
</script>

<template>
  <Breadcrumb :path="[{ text: '学生管理' }, { text: '学生列表' }]" />
  <StudentTable
    @on-enroll="router.push({ name: RouterNameEnum.StudentManageEnroll })"
  />
</template>
