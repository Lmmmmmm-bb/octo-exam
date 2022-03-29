<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Lock, User } from '@element-plus/icons-vue';
import {
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCheckTag,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElImage,
  ElDivider
} from 'element-plus';
import styles from './index.module.scss';
import { formRules } from './config';
import { roleMap } from './type';
import { useUserConfigStore } from '@/store';
import { UserRoleEnum } from '@/common/models/user-config';
import { http } from '@/common/utils/http';
import { LoginApi, ILoginData, ILoginResponse } from '@/services/login';
import { useToggle } from '@/common/hooks';
import { setLocalItem } from '@/common/utils/local-storage';
import { LocalTokenKey } from '@/common/models/store-keys';
import { FormInstanceType } from '@/common/models/element';
import loginImg from '@/assets/login-illustration.webp';

const router = useRouter();
const userConfigStore = useUserConfigStore();
const loginInputRef = ref<HTMLInputElement>();
const formRef = ref<FormInstanceType>();
const { isActive: isLoading, onToggle: onLoadingToggle } = useToggle();
const info = reactive<ILoginData>({
  role: UserRoleEnum.Student,
  userId: '',
  password: ''
});

const handleUserRoleChange = (role: UserRoleEnum) => {
  info.role = role;
  loginInputRef.value && loginInputRef.value.focus();
};

const handleLogin = async () => {
  try {
    onLoadingToggle();
    formRef.value && (await formRef.value.validate());
    const { status, data } = await http.postRequest<ILoginResponse, ILoginData>(
      LoginApi,
      info
    );
    if (status) {
      const { res: userConfig, token } = data;
      setLocalItem(LocalTokenKey, token);
      userConfigStore.patchUserConfig(userConfig);
      router.push('/space');
    }
  } catch (error) {
    // no-console
  } finally {
    onLoadingToggle();
  }
};

onMounted(() => loginInputRef.value && loginInputRef.value.focus());
</script>

<template>
  <div :class="styles.loginWrapper">
    <ElCard :class="styles.loginCard" shadow="hover">
      <ElContainer>
        <ElHeader>
          <h3 :class="styles.cardHeader">Octo</h3>
        </ElHeader>
        <ElContainer>
          <ElAside width="400px" style="flex: 2">
            <ElImage :src="loginImg" />
          </ElAside>
          <ElDivider direction="vertical" style="height: auto" />
          <ElMain style="flex-basis: 0">
            <div class="w-full flex justify-evenly mb-8">
              <ElCheckTag
                v-for="[value, label] in Object.entries(roleMap)"
                :key="value"
                :checked="info.role === value"
                @click="handleUserRoleChange(value as UserRoleEnum)"
              >
                {{ label }}
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
                  ref="loginInputRef"
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
          </ElMain>
        </ElContainer>
      </ElContainer>
      <div :class="`${styles.circleBackground} ${styles.cardBackground}`" />
    </ElCard>
    <div :class="`${styles.circleBackground} ${styles.wrapperBackground}`" />
  </div>
</template>
