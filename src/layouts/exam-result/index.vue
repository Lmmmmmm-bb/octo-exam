<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ElResult, ElButton } from 'element-plus';
import { RouterNameEnum } from '@/router/type';

const route = useRoute();
const router = useRouter();

const handleClickReturn = () => {
  router.replace({ name: RouterNameEnum.ExamList });
};
</script>

<template>
  <ElResult
    class="h-full"
    icon="success"
    title="答题卡提交成功"
    :sub-title="`你的得分为 ${route.params.result} 分`"
  >
    <template #extra>
      <ElButton type="text" @click="handleClickReturn">返回考试列表</ElButton>
    </template>
  </ElResult>
</template>
