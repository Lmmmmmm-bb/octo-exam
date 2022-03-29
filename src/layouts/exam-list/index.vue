<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElDivider, ElTooltip, ElBacktop } from 'element-plus';
import styles from './index.module.scss';
import { IBreadcrumnInfo } from '@/components/breadcrumb/type';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import ExamCard from './components/exam-card.vue';
import { http } from '@/common/utils/http';
import { useUserConfigStore } from '@/store';
import { ExamListByStudentApi } from '@/services/exam';
import { IExam } from '@/common/models/exam';

const userConfigStore = useUserConfigStore();
const path = ref<IBreadcrumnInfo[]>([
  { text: '我的考试' },
  { text: '试卷列表' }
]);
const examList = ref<IExam[]>([]);

const handleExamCardClick = (exam: IExam) => {
  console.log(exam.examCode);
};

onMounted(async () => {
  try {
    const { studentId } = userConfigStore.userConfig;
    const { data } = await http.getRequest<IExam[]>(
      `${ExamListByStudentApi}/${studentId}`
    );
    examList.value = data;
  } catch (error) {
    // no-console
  }
});
</script>

<template>
  <div class="outerWrapper">
    <div class="flex justify-between items-center">
      <Breadcrumb :path="path" />
    </div>
    <ElDivider />
    <div :class="styles.cardWrapper">
      <ElTooltip
        v-for="exam in examList"
        :key="exam.examCode"
        content="点击参加考试"
        placement="top"
        effect="light"
      >
        <ExamCard :exam="exam" @on-click="handleExamCardClick(exam)" />
      </ElTooltip>
    </div>
    <ElBacktop :target="`.${styles.cardWrapper}`" />
  </div>
</template>
