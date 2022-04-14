<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Download, Upload } from '@element-plus/icons-vue';
import {
  ElBacktop,
  ElTooltip,
  ElDivider,
  ElSkeleton,
  ElSkeletonItem,
  ElButton,
  ElUpload,
  ElIcon,
  ElSpace,
  ElMessage
} from 'element-plus';
import { IMultiQuestion } from '@/common/models/question';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import MultipleChoiceCard from './components/multiple-choice-card.vue';
import styles from './index.module.scss';
import { http } from '@/common/utils/http';
import {
  MultiQuestionListApi,
  MultiQuestionListResponseType
} from '@/services/question';
import { RouterNameEnum } from '@/router/type';
import { useToggle } from '@/common/hooks';
import {
  breadcrumbConfig,
  QUESTION_TEMPLATE_URL,
  QUESTION_UPLOAD_URL
} from './config';
import { IBaseResponse } from '@/common/models/base-response';

const router = useRouter();
const { isActive: isLoading, onUnActive: onUnLoading } = useToggle(true);
const { isActive: isFetching, onToggle: onFetchToggle } = useToggle();
const multiQuestionsList = ref<IMultiQuestion[]>([]);

const fetchMultiQuestionList = async () => {
  try {
    const { data } = await http.getRequest<MultiQuestionListResponseType>(
      MultiQuestionListApi
    );
    multiQuestionsList.value = data;
  } catch (error) {
    // no-console
  }
};

const handleQuestionClick = (question: IMultiQuestion) => {
  router.push({
    name: RouterNameEnum.QuestionMultipleChoiceDetail,
    params: { id: question.questionId }
  });
};

const handleDownloadTemplate = () => open(QUESTION_TEMPLATE_URL);

const handleUploadSuccess = async (response: IBaseResponse) => {
  if (!response.status) {
    ElMessage.error('上传失败');
    return;
  }
  try {
    onFetchToggle();
    await fetchMultiQuestionList();
    ElMessage.success('上传题目成功');
  } catch (error) {
    // no-console
  } finally {
    onFetchToggle();
  }
};

const handleUploadError = () => ElMessage.error('上传失败');

onMounted(async () => {
  await fetchMultiQuestionList();
  onUnLoading();
});
</script>

<template>
  <div class="outerWrapper">
    <div class="flex justify-between items-center">
      <Breadcrumb :path="breadcrumbConfig" />
      <ElSpace>
        <ElUpload
          :action="QUESTION_UPLOAD_URL"
          :show-file-list="false"
          :on-success="handleUploadSuccess"
          :on-error="handleUploadError"
        >
          <ElButton type="primary" :icon="Upload">导入题目</ElButton>
        </ElUpload>
        <ElButton type="primary" @click="handleDownloadTemplate">
          下载模版
          <ElIcon class="el-icon--right"><Download /></ElIcon>
        </ElButton>
      </ElSpace>
    </div>
    <ElDivider />
    <ElSkeleton :loading="isLoading" :count="3" animated>
      <template #template>
        <ElSkeletonItem :class="styles.cardSkeleton" variant="rect" />
      </template>
      <div v-loading="isFetching" :class="styles.questionCardWrapper">
        <ElTooltip
          v-for="question of multiQuestionsList"
          :key="question.questionId"
          effect="light"
          content="点击查看题目详情"
          placement="top"
        >
          <MultipleChoiceCard
            :question="question"
            @on-click="handleQuestionClick(question)"
          />
        </ElTooltip>
      </div>
      <ElBacktop :target="`.${styles.questionCardWrapper}`" />
    </ElSkeleton>
  </div>
</template>
