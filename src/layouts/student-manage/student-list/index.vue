<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ElButton, ElMessageBox, ElDivider } from 'element-plus';
import { Delete, Refresh } from '@element-plus/icons-vue';
import { RouterNameEnum } from '@/router/type';
import StudentTable from './components/student-table.vue';
import Breadcrumb from '@/components/breadcrumb/index.vue';
import TooltipIconButton from '@/components/tooltip-icon-button/index.vue';
import styles from './index.module.scss';
import { computed, ref } from 'vue';
import { IStudentConfig } from '@/common/models/user-config';
import StudentInfoDrawer from './components/student-info-drawer.vue';
import { IStudentTableExpose } from './type';
import { http } from '@/common/utils/http';
import { StudentApi } from '@/services/student';
import { useToggle } from '@/common/hooks';

const router = useRouter();
const tableRef = ref<IStudentTableExpose>();
const selectedStudent = ref({} as IStudentConfig);
const { isActive: isDrawerVisible, onToggle: onDrawerVisibleToggle } =
  useToggle();

const isDeleteDisabled = computed(() => {
  if (tableRef.value) {
    return tableRef.value.selectedRows.length === 0;
  }
  return true;
});

const handleEnroll = () =>
  router.push({ name: RouterNameEnum.StudentManageEnroll });

const handleRefreshTable = () =>
  tableRef.value && tableRef.value.onFetchTable();

const handleDbClickCell = (row: IStudentConfig) => {
  selectedStudent.value = row;
  onDrawerVisibleToggle();
};

const handleDeleteMultStudent = async () => {
  if (tableRef.value) {
    const rows = tableRef.value.selectedRows;
    ElMessageBox.confirm(`确定要删除 ${rows.length} 位学生吗？`, '提示', {
      cancelButtonText: '取消',
      confirmButtonText: '确定'
    }).then(async () => {
      const list = rows.map((item) => item.studentId.toString());
      await http.deleteRequest(StudentApi, {
        params: { list: list.join(',') }
      });
      handleRefreshTable();
    });
  }
};
</script>

<template>
  <div class="outerWrapper">
    <Breadcrumb :path="[{ text: '学生管理' }, { text: '学生列表' }]" />
    <ElDivider />
    <div :class="styles.tableActions">
      <ElButton type="primary" plain @click="handleEnroll">
        录入学生信息
      </ElButton>
      <div>
        <TooltipIconButton
          type="danger"
          content="批量删除"
          :icon="Delete"
          :disabled="isDeleteDisabled"
          @on-click="handleDeleteMultStudent"
        />
        <TooltipIconButton
          type="primary"
          :icon="Refresh"
          content="点击刷新"
          @on-click="handleRefreshTable"
        />
      </div>
    </div>
    <StudentTable ref="tableRef" @on-cell-db-click="handleDbClickCell" />
    <StudentInfoDrawer
      :visible="isDrawerVisible"
      :student="selectedStudent"
      @on-close="onDrawerVisibleToggle"
      @on-update="handleRefreshTable"
    />
  </div>
</template>
