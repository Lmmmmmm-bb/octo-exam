<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits } from 'vue';
import { ElDrawer, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { FormRulesMap } from 'element-plus/es/components/form/src/form.type';
import { useToggle } from '@/common/hooks';
import { FormInstanceType } from '../config';
import { http } from '@/common/utils/http';
import { StudentPwdModifyApi } from '@/services/student';
import { useUserConfigStore } from '@/store';

const props = defineProps<{ visible: boolean }>();
const emits = defineEmits<{
  (e: 'onClose'): void;
}>();

const { userConfig } = useUserConfigStore();
const formRef = ref<FormInstanceType | null>(null);
const confirmPwd = reactive({
  pwd: '',
  confirmPwd: ''
});
const { isActive: isLoading, onToggle: onToggleLoading } = useToggle();

const formRules: FormRulesMap<'pwd' | 'confirmPwd'> = {
  pwd: {
    message: '请输入修改的密码',
    required: true,
    trigger: 'change'
  },
  confirmPwd: {
    trigger: 'change',
    required: true,
    validator: (_, val: string, cb) => {
      val.length === 0 && cb('请再次输入密码');
      val !== confirmPwd.pwd && cb('双次输入的密码不一致');
      return true;
    }
  }
};

const handleDrawerClose = () => {
  emits('onClose');
  formRef.value && formRef.value.resetFields();
};

const handleConfirmClick = async () => {
  try {
    onToggleLoading();
    formRef.value && (await formRef.value.validate());
    await http.putRequest(StudentPwdModifyApi, null, {
      params: {
        pwd: confirmPwd.confirmPwd,
        studentId: userConfig.studentId
      }
    });
    handleDrawerClose();
  } catch (error) {
    // no-console
  } finally {
    onToggleLoading();
  }
};
</script>

<template>
  <ElDrawer :model-value="props.visible" :before-close="handleDrawerClose">
    <template #title>
      <h4 class="text-lg">修改密码</h4>
    </template>
    <ElForm
      ref="formRef"
      :model="confirmPwd"
      label-position="top"
      :rules="formRules"
    >
      <ElFormItem label="修改密码" prop="pwd">
        <ElInput
          id="pwd"
          v-model="confirmPwd.pwd"
          placeholder="请输入修改的密码"
          type="password"
        />
      </ElFormItem>
      <ElFormItem label="二次确认" prop="confirmPwd">
        <ElInput
          id="confirmPwd"
          v-model="confirmPwd.confirmPwd"
          type="password"
          placeholder="请再次确认修改的密码"
          show-password
        />
      </ElFormItem>
    </ElForm>
    <ElButton
      type="primary"
      :loading="isLoading"
      plain
      @click="handleConfirmClick"
    >
      确认修改
    </ElButton>
  </ElDrawer>
</template>
