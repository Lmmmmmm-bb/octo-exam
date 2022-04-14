<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { ElDivider } from 'element-plus';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import { breadcrumbConfig } from './config';
import TrueFalseCollapse from './components/true-false-collapse.vue';
import { http } from '@/common/utils/http';
import {
  JudgeQuestionListApi,
  JudgeQuestionListResponseType
} from '@/services/question';
import Pagination from '@/components/pagination/index.vue';
import { IJudgeQuestion } from '@/common/models/question';
import { useToggle } from '@/common/hooks';

const { isActive: isLoading, onToggle: onToggleLoading } = useToggle();
const questionList = ref<IJudgeQuestion[]>([]);
const totalQuestion = ref(0);
const pageState = reactive({
  current: 1,
  pageSize: 10
});

const fetchQuestionList = async () => {
  try {
    onToggleLoading();
    const { data } = await http.getRequest<JudgeQuestionListResponseType>(
      JudgeQuestionListApi,
      {
        params: {
          page: pageState.current,
          pageSize: pageState.pageSize
        }
      }
    );
    questionList.value = data.list;
    totalQuestion.value = data.total;
  } catch (error) {
    // no-console
  } finally {
    onToggleLoading();
  }
};

onMounted(() => {
  fetchQuestionList();
});
</script>

<template>
  <div class="outerWrapper">
    <Breadcrumb :path="breadcrumbConfig" />
    <ElDivider />
    <TrueFalseCollapse v-loading="isLoading" :question-list="questionList" />
    <div class="flex justify-center">
      <Pagination
        v-model:current-page="pageState.current"
        v-model:page-size="pageState.pageSize"
        class="mt-4"
        :total="totalQuestion"
        @page-change="fetchQuestionList"
      />
    </div>
  </div>
</template>
