<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import {
  ElInput,
  ElButton,
  ElDivider,
  ElTooltip,
  ElBacktop,
  ElSelect,
  ElOption
} from 'element-plus';
import styles from './index.module.scss';
import { IBreadcrumnInfo } from '@/components/breadcrumb/type';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import ExamCard from './components/exam-card.vue';
import { SelectExamEnum } from './type';
import { http } from '@/common/utils/http';

const path = ref<IBreadcrumnInfo[]>([{ text: '试卷列表' }]);
const searchInput = ref('');
const selectType = ref<SelectExamEnum>(SelectExamEnum.All);

const handleFetchExamList = async () => {
  try {
    const res = await http.postRequest;
  } catch (error) {}
};

const handleSearchClick = () => {
  console.log(searchInput.value);
};

const handleExamCardClick = () => {
  console.log('card click');
};

// onMounted(async () => {});
</script>

<template>
  <div id="exam-list-wrapper" :class="styles.examListWrapper">
    <div class="flex justify-between items-center">
      <Breadcrumb :path="path" />
      <div class="flex justify-center items-center">
        <!-- TODO: el-input 改成 el-autocomplete -->
        <ElInput
          v-model="searchInput"
          class="mr-4"
          placeholder="通过试卷名称查找试卷"
          clearable
          @keyup.enter="handleSearchClick"
        >
          <template #append>
            <ElSelect v-model="selectType" style="width: 88px">
              <ElOption label="全部" :value="SelectExamEnum.All" />
              <ElOption label="已完成" :value="SelectExamEnum.Done" />
              <ElOption label="未完成" :value="SelectExamEnum.UnDone" />
            </ElSelect>
          </template>
        </ElInput>
        <ElButton type="primary" :icon="Search" @click="handleSearchClick">
          搜 索
        </ElButton>
      </div>
    </div>
    <ElDivider />
    <div id="card-wrapper" :class="styles.cardWrapper">
      <ElTooltip
        v-for="(_, index) in [, , , , , , , , , , , , , , , , ,]"
        :key="index"
        content="点击参加考试"
        placement="top"
        effect="light"
      >
        <ExamCard @click="handleExamCardClick" />
      </ElTooltip>
    </div>
    <ElBacktop :target="`.${styles.cardWrapper}`" />
  </div>
</template>
