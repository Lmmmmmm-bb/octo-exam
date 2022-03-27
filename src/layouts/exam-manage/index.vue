<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { ElDivider, ElSkeleton, ElSkeletonItem, ElBacktop } from 'element-plus';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import { useToggle } from '@/common/hooks';
import ExamCard from './components/exam-card.vue';
import styles from './index.module.scss';
import { http } from '@/common/utils/http';
import { ExamListApi, ExamListResponseType } from '@/services/exam';
import { IExam } from '@/common/models/exam';
import Pagination from '@/components/pagination/index.vue';

const examList = ref<IExam[]>([]);
const totalExam = ref(0);
const {
  isActive: isLoading,
  onActive: onLoading,
  onUnActive: onUnLoading
} = useToggle(true);
const pageState = reactive({
  current: 1,
  pageSize: 10
});

const fetchExamList = async () => {
  try {
    onLoading();
    const { data } = await http.getRequest<ExamListResponseType>(ExamListApi, {
      params: {
        page: pageState.current,
        pageSize: pageState.pageSize
      }
    });
    examList.value = data.list;
    totalExam.value = data.total;
  } catch (error) {
    // no-console
  } finally {
    onUnLoading();
  }
};

onMounted(() => {
  fetchExamList();
});
</script>

<template>
  <div class="outerWrapper">
    <Breadcrumb :path="[{ text: '考试管理' }, { text: '考试列表' }]" />
    <ElDivider />
    <ElSkeleton :loading="isLoading" :count="3" :throttle="500" animated>
      <template #template>
        <ElSkeletonItem :class="styles.cardSkeleton" variant="rect" />
      </template>
      <div :class="styles.examMainWrapper">
        <div :class="styles.examCardWrapper">
          <ExamCard
            v-for="item of examList"
            :key="item.paperId"
            :exam="item"
            @on-delete="fetchExamList"
          />

          <ElBacktop :target="`.${styles.examCardWrapper}`" />
        </div>
        <Pagination
          v-model:currentPage="pageState.current"
          v-model:pageSize="pageState.pageSize"
          :class="styles.examPagination"
          :total="totalExam"
          @page-change="fetchExamList"
        />
      </div>
    </ElSkeleton>
  </div>
</template>
