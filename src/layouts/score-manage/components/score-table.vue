<script setup lang="ts">
import { reactive, onMounted, defineExpose, defineProps, ref } from 'vue';
import { ElTable, ElTableColumn, ElButton, ElPopconfirm } from 'element-plus';
import { Warning } from '@element-plus/icons-vue';
import { useLocale, useToggle } from '@/common/hooks';
import { IScore } from '@/common/models/score';
import {
  ScoreListApi,
  ScoreListByExamApi,
  ScoreListResponseType
} from '@/services/score';
import { http } from '@/common/utils/http';
import { ScoreDeleteByIdApi } from '@/services/score';
import Pagination from '@/components/pagination/index.vue';

const props = defineProps<{ isHidePagination: boolean }>();

const { t } = useLocale();
const selectedRows = ref<IScore[]>([]);
const { isActive: isLoading, onToggle: onToggleLoading } = useToggle();
const tableState = reactive({
  total: 0,
  data: [] as IScore[]
});
const pageState = reactive({
  current: 1,
  pageSize: 10
});

const fetchScoreList = async () => {
  try {
    onToggleLoading();
    const { data } = await http.getRequest<ScoreListResponseType>(
      ScoreListApi,
      {
        params: {
          page: pageState.current,
          pageSize: pageState.pageSize
        }
      }
    );
    const { list, total } = data;
    tableState.data = list;
    tableState.total = total;
  } catch (error) {
    // no-console
  } finally {
    onToggleLoading();
  }
};

const fetchScoreListByExamCode = async (code: string) => {
  try {
    onToggleLoading();
    const { data } = await http.getRequest<IScore[]>(
      `${ScoreListByExamApi}/${code}`
    );
    tableState.data = data;
    tableState.total = data.length;
  } catch (error) {
    // no-console
  } finally {
    onToggleLoading();
  }
};

const handleSelectedRow = (row: IScore[]) => (selectedRows.value = row);

const handleDeleteScore = async (row: IScore) => {
  try {
    await http.deleteRequest(ScoreDeleteByIdApi, {
      params: { list: row.scoreId }
    });
    await fetchScoreList();
  } catch (error) {
    // no-console
  }
  return true;
};

defineExpose({
  selectedRows,
  onFetchScore: fetchScoreList,
  onFetchScoreByExamCode: fetchScoreListByExamCode
});

onMounted(() => {
  fetchScoreList();
});
</script>

<template>
  <div class="w-full flex justify-center items-center flex-col">
    <ElTable
      v-loading="isLoading"
      :empty-text="t('score.empty')"
      size="large"
      row-key="scoreId"
      :data="tableState.data"
      highlight-current-row
      @selection-change="handleSelectedRow"
    >
      <ElTableColumn type="selection" width="50" align="center" />
      <ElTableColumn :label="t('profile.studentId')" prop="studentId" />
      <ElTableColumn :label="t('exam.code')" prop="examCode" />
      <ElTableColumn :label="t('score.subject')" prop="subject" />
      <ElTableColumn :label="t('score.score')" prop="score" />
      <ElTableColumn :label="t('score.date')" prop="answerDate" />
      <ElTableColumn :label="t('common.operate')">
        <template #default="scope">
          <ElPopconfirm
            :icon="Warning"
            icon-color="red"
            :title="t('score.deleteComfirm')"
            :confirm-button-text="t('common.confirm')"
            :cancel-button-text="t('common.cancel')"
            @confirm="handleDeleteScore(scope.row)"
          >
            <template #reference>
              <ElButton size="small" type="danger" plain>
                {{ t('common.delete') }}
              </ElButton>
            </template>
          </ElPopconfirm>
        </template>
      </ElTableColumn>
    </ElTable>
    <Pagination
      v-show="props.isHidePagination"
      v-model:current-page="pageState.current"
      v-model:page-size="pageState.pageSize"
      class="mt-4"
      :total="tableState.total"
      @page-change="fetchScoreList"
    />
  </div>
</template>
