<script setup lang="ts">
import {
  reactive,
  watch,
  onMounted,
  defineExpose,
  defineProps,
  ref
} from 'vue';
import {
  ElTable,
  ElTableColumn,
  ElPagination,
  ElButton,
  ElPopconfirm
} from 'element-plus';
import { Warning } from '@element-plus/icons-vue';
import { useToggle } from '@/common/hooks';
import styles from './index.module.scss';
import { IScore } from '@/common/models/score';
import {
  ScoreListApi,
  ScoreListByExamApi,
  ScoreListResponseType
} from '@/services/score';
import { http } from '@/common/utils/http';
import { ScoreDeleteByIdApi } from '@/services/score';

const props = defineProps<{ isHidePagination: boolean }>();

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

watch(
  () => [pageState.pageSize, pageState.current],
  (next, prev) => {
    const [nextPageSize] = next;
    const [prevPageSize, prevCurrentPage] = prev;
    if (nextPageSize !== prevPageSize && prevCurrentPage !== 1) {
      pageState.current = 1;
      return;
    }
    fetchScoreList();
  }
);

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
      empty-text="暂无成绩数据"
      size="large"
      row-key="scoreId"
      :data="tableState.data"
      highlight-current-row
      @selection-change="handleSelectedRow"
    >
      <ElTableColumn type="selection" width="50" align="center" />
      <ElTableColumn label="考生号" prop="studentId" />
      <ElTableColumn label="考试编号" prop="examCode" />
      <ElTableColumn label="科目" prop="subject" />
      <ElTableColumn label="分数" prop="score" />
      <ElTableColumn label="提交时间" prop="answerDate" />
      <ElTableColumn label="操作">
        <template #default="scope">
          <ElPopconfirm
            :icon="Warning"
            icon-color="red"
            title="确定要删除该成绩吗"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="handleDeleteScore(scope.row)"
          >
            <template #reference>
              <ElButton size="small" type="danger" plain>删除</ElButton>
            </template>
          </ElPopconfirm>
        </template>
      </ElTableColumn>
    </ElTable>
    <ElPagination
      v-show="props.isHidePagination"
      v-model:currentPage="pageState.current"
      v-model:page-size="pageState.pageSize"
      :class="styles.tablePagination"
      layout="total, sizes, prev, pager, next"
      :page-sizes="[10, 20, 50]"
      :total="tableState.total"
      background
    />
  </div>
</template>
