<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  ElBacktop,
  ElTooltip,
  ElDivider,
  ElSkeleton,
  ElSkeletonItem
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

const router = useRouter();
const { isActive: isLoading, onUnActive: onUnLoading } = useToggle(true);
const multiQuestionsList = ref<IMultiQuestion[]>([]);

const handleQuestionClick = (question: IMultiQuestion) => {
  router.push({
    name: RouterNameEnum.QuestionMultipleChoiceDetail,
    params: { id: question.questionId }
  });
};

onMounted(async () => {
  const { data } = await http.getRequest<MultiQuestionListResponseType>(
    MultiQuestionListApi
  );
  multiQuestionsList.value = data;
  onUnLoading();
});
</script>

<template>
  <div :class="styles.questionMultipleChoiceWrapper">
    <Breadcrumb :path="[{ text: '选择题题库' }]" />
    <ElDivider />
    <ElSkeleton :loading="isLoading" :count="3" animated>
      <template #template>
        <ElSkeletonItem :class="styles.cardSkeleton" variant="rect" />
      </template>
      <div :class="styles.questionCardWrapper">
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
