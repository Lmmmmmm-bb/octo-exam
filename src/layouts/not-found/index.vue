<script setup lang="ts">
import { RouterNameEnum } from '@/router/type';
import { ElEmpty, ElLink } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();
const handleReturnLogin = () => router.push({ name: RouterNameEnum.Login });
</script>

<template>
  <ElEmpty style="height: 100%" description="Not Found">
    <ElLink type="primary" @click="handleReturnLogin">返回登陆</ElLink>
  </ElEmpty>
</template>
