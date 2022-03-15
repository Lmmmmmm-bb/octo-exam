<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Lock, User } from '@element-plus/icons-vue';
import {
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCheckTag
} from 'element-plus';
import styles from './index.module.scss';
import { FormInstanceType, formRules } from './config';
import { roleMap } from './type';
import { useUserConfigStore } from '@/store';
import {
  IAdminConfig,
  IStudentConfig,
  UserRoleEnum
} from '@/common/models/user-config';
import { http } from '@/common/utils/http';
import { ILoginData, LoginApi } from '@/services/login';
import { useToggle } from '@/common/hooks';

const router = useRouter();
const userConfigStore = useUserConfigStore();
const formRef = ref<FormInstanceType | null>(null);
const { isActive: isLoading, onToggle: onLoadingToggle } = useToggle();
const info = reactive<ILoginData>({
  role: UserRoleEnum.Student,
  userId: '',
  password: ''
});

const handleLogin = async () => {
  try {
    onLoadingToggle();
    formRef.value && (await formRef.value.validate());
    const { status, data: userConfig } = await http.postRequest<
      ILoginData,
      IAdminConfig & IStudentConfig
    >(LoginApi, info);
    if (status) {
      userConfigStore.patchUserConfig(userConfig);
      router.push('/space');
    }
  } catch (error) {
    // no-console
  } finally {
    onLoadingToggle();
  }
};
</script>

<template>
  <div :class="styles.loginWrapper">
    <ElCard :class="styles.loginCard" shadow="hover">
      <template #header>
        <h4 class="text-2xl font-semibold mb-4">在线考试系统登陆</h4>
      </template>
      <div class="w-full flex justify-evenly">
        <ElCheckTag
          v-for="[name, value] in Object.entries(roleMap)"
          :key="value"
          :checked="info.role === value"
          @click="info.role = value"
        >
          {{ name }}
        </ElCheckTag>
      </div>
      <ElForm
        ref="formRef"
        label-position="top"
        :model="info"
        :rules="formRules"
        hide-required-asterisk
      >
        <ElFormItem label="用户名" for="username" prop="userId">
          <ElInput
            id="username"
            v-model="info.userId"
            :prefix-icon="User"
            clearable
          />
        </ElFormItem>
        <ElFormItem label="密码" for="password" prop="password">
          <ElInput
            id="password"
            v-model="info.password"
            type="password"
            :prefix-icon="Lock"
            show-password
            @keyup.enter="handleLogin"
          />
        </ElFormItem>
      </ElForm>
      <ElButton
        type="primary"
        :class="styles.loginLoginBtn"
        :loading="isLoading"
        @click="handleLogin"
      >
        登 陆
      </ElButton>
    </ElCard>
  </div>
</template>
