<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  ElDivider,
  ElSpace,
  ElInput,
  ElButton,
  ElMessageBox
} from 'element-plus';
import { Refresh, Search, Delete } from '@element-plus/icons-vue';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import { breadcrumbConfig } from './config';
import ScoreTable from './components/score-table.vue';
import TooltipIconButton from '@/components/tooltip-icon-button/index.vue';
import { IScoreTableExpose } from './type';
import { useToggle } from '@/common/hooks';
import { http } from '@/common/utils/http';
import { ScoreDeleteByIdApi } from '@/services/score';

const tableRef = ref<IScoreTableExpose>();
const {
  isActive: isSearch,
  onActive: onSearch,
  onUnActive: onUnSearch
} = useToggle();
const inputExamCode = ref('');

const isDeleteDisabled = computed(() => {
  if (tableRef.value) {
    return tableRef.value.selectedRows.length === 0;
  }
  return true;
});

const handleClearInput = () => {
  onUnSearch();
  tableRef.value && tableRef.value.onFetchScore();
};

const handleSearch = () => {
  if (tableRef.value) {
    const { onFetchScore, onFetchScoreByExamCode } = tableRef.value;
    if (inputExamCode.value.trim().length === 0) {
      onFetchScore();
    } else {
      onSearch();
      onFetchScoreByExamCode(inputExamCode.value);
    }
  }
};

const handleDelete = async () => {
  if (tableRef.value) {
    const rows = tableRef.value.selectedRows;
    ElMessageBox.confirm(`确定要删除 ${rows.length} 位学生吗？`, '提示', {
      cancelButtonText: '取消',
      confirmButtonText: '确定'
    }).then(async () => {
      const list = rows.map((item) => item.scoreId.toString());
      await http.deleteRequest(ScoreDeleteByIdApi, {
        params: { list: list.join(',') }
      });
      handleRefresh();
    });
  }
};

const handleRefresh = () => {
  if (tableRef.value) {
    const { onFetchScore, onFetchScoreByExamCode } = tableRef.value;
    isSearch.value
      ? onFetchScoreByExamCode(inputExamCode.value)
      : onFetchScore();
  }
};
</script>

<template>
  <div class="outerWrapper">
    <Breadcrumb :path="breadcrumbConfig" />
    <ElDivider />
    <div class="w-full flex justify-between mb-2">
      <ElSpace size="large">
        <ElInput
          v-model="inputExamCode"
          placeholder="通过考试编号查询"
          clearable
          @clear="handleClearInput"
        />
        <ElButton type="primary" :icon="Search" @click="handleSearch">
          搜 索
        </ElButton>
      </ElSpace>
      <div>
        <TooltipIconButton
          :icon="Delete"
          :disabled="isDeleteDisabled"
          type="danger"
          content="批量删除"
          @on-click="handleDelete"
        />
        <TooltipIconButton
          :icon="Refresh"
          type="primary"
          content="点击刷新"
          @on-click="handleRefresh"
        />
      </div>
    </div>
    <ScoreTable ref="tableRef" :is-hide-pagination="!isSearch" />
  </div>
</template>
