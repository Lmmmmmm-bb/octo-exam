<script setup lang="ts">
import {
  onMounted,
  reactive,
  ref,
  defineEmits,
  defineExpose,
  watch
} from 'vue';
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElIcon,
  ElTooltip,
  ElPopconfirm,
  ElTag,
  ElPagination
} from 'element-plus';
import { View, Warning } from '@element-plus/icons-vue';
import { IStudentConfig } from '@/common/models/user-config';
import { http } from '@/common/utils/http';
import {
  StudentListApi,
  StudentApi,
  StudentListResponseType
} from '@/services/student';
import styles from './index.module.scss';

const emits = defineEmits<{
  (e: 'onCellDbClick', row: IStudentConfig): void;
}>();

const tableRef = ref<InstanceType<typeof ElTable>>();
const isLoading = ref(false);
const selectedRows = ref<IStudentConfig[]>([]);
const sourceData = ref<IStudentConfig[]>([]);
const tableState = reactive({
  total: 0,
  data: [] as IStudentConfig[]
});
const pageState = reactive({
  current: 1,
  pageSize: 10
});

const fetchTableData = async () => {
  try {
    isLoading.value = true;
    const { data } = await http.getRequest<StudentListResponseType>(
      StudentListApi,
      {
        params: {
          page: pageState.current,
          pageSize: pageState.pageSize
        }
      }
    );
    const { list, total } = data;
    sourceData.value = list;
    tableState.data = list;
    tableState.total = total;
  } catch (error) {
    // no-console
  } finally {
    selectedRows.value = [];
    isLoading.value = false;
  }
};

const handleDeleteStudent = async (row: IStudentConfig) => {
  try {
    await http.deleteRequest(StudentApi, {
      params: { list: `${row.studentId}` }
    });
    await fetchTableData();
  } catch (error) {
    // no-console
  }
  return true;
};

const handleSelectedRow = (rows: IStudentConfig[]) =>
  (selectedRows.value = rows);

const handleDbClickCell = (row: IStudentConfig) => emits('onCellDbClick', row);

watch(
  () => [pageState.pageSize, pageState.current],
  (next, prev) => {
    const [nextPageSize] = next;
    const [prevPageSize, prevCurrent] = prev;
    if (nextPageSize !== prevPageSize && prevCurrent !== 1) {
      return;
    }
    fetchTableData();
  }
);

defineExpose({
  selectedRows,
  onFetchTable: fetchTableData
});

onMounted(() => {
  fetchTableData();
});
</script>

<template>
  <div :class="styles.studentTableWrapper">
    <ElTable
      ref="tableRef"
      v-loading="isLoading"
      style="height: 100%"
      empty-text="暂无学生数据"
      size="large"
      row-key="studentId"
      :data="tableState.data"
      :default-sort="{ prop: 'date', order: 'descending' }"
      highlight-current-row
      @selection-change="handleSelectedRow"
      @cell-dblclick="handleDbClickCell"
    >
      <ElTableColumn type="selection" width="40" align="center" />
      <ElTableColumn label="姓名" prop="studentName" width="120" />
      <ElTableColumn label="个人信息">
        <ElTableColumn label="学号" prop="studentId" sortable />
        <ElTableColumn label="基本信息">
          <ElTableColumn label="性别" prop="sex" width="70" align="center">
            <template #default="scope">
              <ElTag v-if="scope.row.sex === '男'" effect="plain">
                {{ scope.row.sex }}
              </ElTag>
              <ElTag v-else type="success" effect="plain">
                {{ scope.row.sex }}
              </ElTag>
            </template>
          </ElTableColumn>
          <ElTableColumn label="电话" prop="tel" width="150" />
          <ElTableColumn label="邮箱" prop="email" />
          <ElTableColumn label="身份证" width="240">
            <template #default="scope">
              <span class="flex justify-between items-center">
                <span v-if="scope.row.isView">{{ scope.row.cardId }}</span>
                <ElTooltip
                  v-else
                  effect="light"
                  content="点击右方按钮查看"
                  placement="right"
                >
                  ******
                </ElTooltip>
                <ElIcon
                  :class="styles.viewIcon"
                  @click="scope.row.isView = !scope.row.isView"
                >
                  <View />
                </ElIcon>
              </span>
            </template>
          </ElTableColumn>
        </ElTableColumn>
        <ElTableColumn label="班级信息">
          <ElTableColumn label="学院" prop="institute" />
          <ElTableColumn label="专业" prop="major" />
          <ElTableColumn label="年级" prop="grade" width="80" align="center" />
          <ElTableColumn label="班级" prop="clazz" width="100" />
        </ElTableColumn>
      </ElTableColumn>
      <ElTableColumn label="操作">
        <template #default="scope">
          <div style="text-align: center">
            <ElButton
              size="small"
              type="primary"
              plain
              @click="emits('onCellDbClick', scope.row)"
              >编 辑</ElButton
            >
            <ElPopconfirm
              :icon="Warning"
              icon-color="red"
              title="确定要删除该学生吗"
              confirm-button-text="确定"
              cancel-button-text="取消"
              @confirm="handleDeleteStudent(scope.row)"
            >
              <template #reference>
                <ElButton size="small" type="danger" plain>删 除</ElButton>
              </template>
            </ElPopconfirm>
          </div>
        </template>
      </ElTableColumn>
    </ElTable>
    <ElPagination
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
