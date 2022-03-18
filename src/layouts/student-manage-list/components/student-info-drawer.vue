<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import {
  ElDrawer,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption
} from 'element-plus';
import { IStudentConfig } from '@/common/models/user-config';

const emits = defineEmits<{
  (e: 'onClose'): void;
}>();

const props = defineProps<{
  visible: boolean;
  student: IStudentConfig;
}>();
</script>

<template>
  <ElDrawer
    title="编辑学生信息"
    :model-value="props.visible"
    :before-close="() => emits('onClose')"
  >
    <ElForm label-position="top" :model="props.student">
      <ElFormItem label="学号" prop="studentId">
        <ElInput :model-value="props.student.studentId" />
      </ElFormItem>
      <ElFormItem label="姓名" prop="studentName">
        <ElInput :model-value="props.student.studentName" />
      </ElFormItem>
      <ElFormItem label="性别" prop="sex">
        <ElSelect style="width: 100%" :model-value="props.student.sex">
          <ElOption value="男">男</ElOption>
          <ElOption value="女">女</ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="电话" prop="tel">
        <ElInput :model-value="props.student.tel" />
      </ElFormItem>
      <ElFormItem label="邮箱" prop="email">
        <ElInput :model-value="props.student.email" />
      </ElFormItem>
      <ElFormItem label="身份证" prop="cardId">
        <ElInput :model-value="props.student.cardId" />
      </ElFormItem>
      <ElFormItem label="年级" prop="grade">
        <ElInput :model-value="props.student.grade" disabled />
      </ElFormItem>
      <ElFormItem label="班级" prop="clazz">
        <ElInput :model-value="props.student.clazz" disabled />
      </ElFormItem>
      <ElFormItem label="学院" prop="institute">
        <ElInput :model-value="props.student.institute" disabled />
      </ElFormItem>
      <ElFormItem label="专业" prop="major">
        <ElInput :model-value="props.student.major" disabled />
      </ElFormItem>
    </ElForm>
  </ElDrawer>
</template>
