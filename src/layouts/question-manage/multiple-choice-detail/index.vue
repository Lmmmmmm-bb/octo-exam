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
import styles from './index.module.scss';
import {
  MultiQuestionByIdApi,
  MultiQuestionResponseType
} from '@/services/question';
import { IMultiQuestion } from '@/common/models/question';
import { useLocale, useToggle } from '@/common/hooks';
import { RouterNameEnum } from '@/router/type';
import EmptyLink from '@/components/empty-link/index.vue';
import LevelTag from '@/components/level-tag/index.vue';
import { IBreadcrumnInfo } from '@/components/breadcrumb/type';

const { t } = useLocale();
const route = useRoute();
const { isActive: isLoading, onUnActive: onUnLoading } = useToggle(true);
const question = ref({} as IMultiQuestion);

const breadcrumbConfig: IBreadcrumnInfo[] = [
  { text: t(`menu.${RouterNameEnum.QuestionManage}`) },
  {
    text: t(`menu.${RouterNameEnum.QuestionMultipleChoice}`),
    to: { name: RouterNameEnum.QuestionMultipleChoice }
  },
  { text: t(`menu.${RouterNameEnum.QuestionMultipleChoiceDetail}`) }
];

onMounted(async () => {
  const { id } = route.params;
  const { data } = await http.getRequest<MultiQuestionResponseType>(
    `${MultiQuestionByIdApi}/${id}`
  );
  question.value = data ?? {};
  onUnLoading();
});
</script>

<template>
  <div class="outerWrapper">
    <Breadcrumb :path="breadcrumbConfig" />
    <ElDivider />
    <ElSkeleton :loading="isLoading" animated>
      <template #template>
        <ElSkeletonItem :class="styles.cardSkeleton" variant="rect" />
      </template>
      <ElCard
        v-if="question.questionId"
        :class="styles.detailCard"
        shadow="hover"
      >
        <ElDescriptions
          :column="2"
          size="large"
          :title="`${t('question.id')}： ${question.questionId}`"
        >
          <template #extra>
            <LevelTag :level="question.level" />
          </template>
          <ElDescriptionsItem :span="2" :label="t('question.name')">
            {{ question.question }}
          </ElDescriptionsItem>
          <ElDescriptionsItem :label="t('score.subject')">
            {{ question.subject }}
          </ElDescriptionsItem>
          <ElDescriptionsItem :label="t('question.section')">
            {{ question.section }}
          </ElDescriptionsItem>
          <ElDescriptionsItem :span="2" :label="t('score.score')">
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

          <ElDescriptionsItem :span="2" :label="t('question.answer')">
            <ElTag>{{ question.rightAnswer }}</ElTag>
          </ElDescriptionsItem>
          <ElDescriptionsItem :span="2" :label="t('question.analysis')">
            {{ question.analysis || t('question.noAnalysis') }}
          </ElDescriptionsItem>
        </ElDescriptions>
      </ElCard>
      <EmptyLink
        v-else
        :link-props="{
          text: t('question.return'),
          to: { name: RouterNameEnum.QuestionMultipleChoice }
        }"
      />
    </ElSkeleton>
  </div>
</template>
