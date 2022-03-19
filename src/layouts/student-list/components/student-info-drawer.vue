<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch, ref } from 'vue';
import {
  ElDrawer,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElButton
} from 'element-plus';
import { IStudentConfig } from '@/common/models/user-config';
import { FormInstanceType } from '@/common/models/element';
import { infoDrawerFormRules } from '../config';
import { http } from '@/common/utils/http';
import { StudentApi } from '@/services/student';

const emits = defineEmits<{
  (e: 'onClose'): void;
  (e: 'onUpdate'): void;
}>();

const props = defineProps<{
  visible: boolean;
  student: IStudentConfig;
}>();

const formRef = ref<FormInstanceType>();
const info = reactive({ student: { ...props.student } });

const handleClickSave = async () => {
  if (formRef.value && (await formRef.value.validate())) {
    await http.putRequest<IStudentConfig>(StudentApi, info.student);
    emits('onUpdate');
    emits('onClose');
  }
};

watch(
  () => [props.student],
  () => {
    info.student = { ...props.student };
  }
);
</script>

<template>
  <ElDrawer
    title="编辑学生信息"
    :model-value="props.visible"
    :before-close="() => emits('onClose')"
  >
    <ElForm
      ref="formRef"
      label-position="top"
      :model="info.student"
      :rules="infoDrawerFormRules"
    >
      <ElFormItem label="年级" prop="grade">
        <ElInput v-model="info.student.grade" disabled />
      </ElFormItem>
      <ElFormItem label="班级" prop="clazz">
        <ElInput v-model="info.student.clazz" disabled />
      </ElFormItem>
      <ElFormItem label="学院" prop="institute">
        <ElInput v-model="info.student.institute" disabled />
      </ElFormItem>
      <ElFormItem label="专业" prop="major">
        <ElInput v-model="info.student.major" disabled />
      </ElFormItem>
      <ElFormItem label="学号" prop="studentId" required>
        <ElInput v-model="info.student.studentId" />
      </ElFormItem>
      <ElFormItem label="姓名" prop="studentName" required>
        <ElInput v-model="info.student.studentName" />
      </ElFormItem>
      <ElFormItem label="性别" prop="sex" required>
        <ElSelect v-model="info.student.sex" style="width: 100%">
          <ElOption value="男">男</ElOption>
          <ElOption value="女">女</ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="电话" prop="tel" required>
        <ElInput v-model="info.student.tel" />
      </ElFormItem>
      <ElFormItem label="邮箱" prop="email" required>
        <ElInput v-model="info.student.email" />
      </ElFormItem>
      <ElFormItem label="身份证" prop="cardId" required>
        <ElInput v-model="info.student.cardId" show-password />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="handleClickSave">保存修改</ElButton>
      </ElFormItem>
    </ElForm>
  </ElDrawer>
</template>
