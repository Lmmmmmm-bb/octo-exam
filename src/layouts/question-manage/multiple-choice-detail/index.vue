<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElCard,
  ElDivider,
  ElSkeleton,
  ElSkeletonItem
} from 'element-plus';
import { http } from '@/common/utils/http';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import { breadcrumbConfig, questionLevelMap } from './config';
import styles from './index.module.scss';
import {
  MultiQuestionApi,
  MultiQuestionResponseType
} from '@/services/question';
import { IMultiQuestion } from '@/common/models/question';
import { getLevelTagType } from './utils';
import { useToggle } from '@/common/hooks';

const route = useRoute();
const { isActive: isLoading, onUnActive: onUnLoading } = useToggle(true);
const question = ref({} as IMultiQuestion);

onMounted(async () => {
  const { id } = route.params;
  const { data } = await http.getRequest<MultiQuestionResponseType>(
    MultiQuestionApi,
    {
      params: { questionId: id }
    }
  );
  question.value = data;
  onUnLoading();
});
</script>

<template>
  <div :class="styles.multipleChoiceDetailWrapper">
    <Breadcrumb :path="breadcrumbConfig" />
    <ElDivider />
    <ElSkeleton :loading="isLoading" animated>
      <template #template>
        <ElSkeletonItem :class="styles.cardSkeleton" variant="rect" />
      </template>
      <ElCard :class="styles.detailCard" shadow="hover">
        <ElDescriptions
          :column="2"
          size="large"
          :title="`题目 ID： ${question.questionId}`"
        >
          <template #extra>
            <ElTag :type="getLevelTagType(question.level)">
              {{ questionLevelMap[question.level] }}
            </ElTag>
          </template>
          <ElDescriptionsItem :span="2" label="题目">
            {{ question.question }}
          </ElDescriptionsItem>
          <ElDescriptionsItem label="考试科目">
            {{ question.subject }}
          </ElDescriptionsItem>
          <ElDescriptionsItem label="所属章节">
            {{ question.section }}
          </ElDescriptionsItem>
          <ElDescriptionsItem :span="2" label="分值">
            {{ question.score }}
          </ElDescriptionsItem>
          <ElDescriptionsItem label="A">
            {{ question.answerA }}
          </ElDescriptionsItem>
          <ElDescriptionsItem label="B">
            {{ question.answerB }}
          </ElDescriptionsItem>
          <ElDescriptionsItem label="C">
            {{ question.answerC }}
          </ElDescriptionsItem>
          <ElDescriptionsItem label="D">
            {{ question.answerD }}
          </ElDescriptionsItem>

          <ElDescriptionsItem :span="2" label="正确答案">
            <ElTag>{{ question.rightAnswer }}</ElTag>
          </ElDescriptionsItem>
          <ElDescriptionsItem :span="2" label="题目解析">
            {{ question.analysis || '暂无解析' }}
          </ElDescriptionsItem>
        </ElDescriptions>
      </ElCard>
    </ElSkeleton>
  </div>
</template>
