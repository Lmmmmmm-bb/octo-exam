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
  ElDivider,
  ElCheckbox,
  ElBadge
} from 'element-plus';
import { useMotion } from '@vueuse/motion';
import styles from './index.module.scss';
import { formRules, loginWrapperMotionConfig } from './config';
import { roleMap } from './type';
import { useUserConfigStore } from '@/store';
import { UserRoleEnum } from '@/common/models/user-config';
import { http } from '@/common/utils/http';
import { LoginApi, ILoginData, ILoginResponse } from '@/services/login';
import { useToggle } from '@/common/hooks';
import {
  getLocalItem,
  removeLocalItem,
  setLocalItem
} from '@/common/utils/local-storage';
import { LocalTokenKey, LocalLoginInfoKey } from '@/common/models/store-keys';
import { FormInstanceType } from '@/common/models/element';
import loginImg from '@/assets/login-illustration.webp';
import { encrypt, decrypt } from '@/common/utils/crypto';
import { RouterNameEnum } from '@/router/type';

const router = useRouter();
const userConfigStore = useUserConfigStore();
const loginWrapperRef = ref<HTMLDivElement>();
const loginInputRef = ref<HTMLInputElement>();
const formRef = ref<FormInstanceType>();
const { isActive: isSavePwd } = useToggle();
const { isActive: isLoading, onToggle: onLoadingToggle } = useToggle();
const info = reactive<ILoginData>({
  role: UserRoleEnum.Student,
  userId: '',
  password: ''
});

const motionInstance = useMotion(loginWrapperRef, loginWrapperMotionConfig);

const initInfo = () => {
  try {
    const localInfo = getLocalItem(LocalLoginInfoKey);
    if (localInfo) {
      const o: ILoginData = JSON.parse(localInfo);
      isSavePwd.value = true;
      info.role = o.role;
      info.userId = o.userId;
      info.password = decrypt(o.password);
    }
  } catch (error) {
    // no-console
  }
};

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
      isSavePwd.value
        ? setLocalItem(
            LocalLoginInfoKey,
            JSON.stringify({
              ...info,
              password: encrypt(info.password)
            })
          )
        : removeLocalItem(LocalLoginInfoKey);
      setLocalItem(LocalTokenKey, token);
      userConfigStore.patchUserConfig(userConfig);
      motionInstance.leave(() => router.push({ name: RouterNameEnum.Home }));
    }
  } catch (error) {
    // no-console
  } finally {
    onLoadingToggle();
  }
};

onMounted(() => {
  initInfo();
  loginInputRef.value && loginInputRef.value.focus();
});
</script>

<template>
  <div ref="loginWrapperRef" :class="styles.loginWrapper">
    <ElCard :class="styles.loginCard" shadow="hover">
      <ElContainer>
        <ElHeader>
          <h3 :class="styles.cardHeader">
            <ElBadge value="EXAM" type="success">OCTO</ElBadge>
          </h3>
        </ElHeader>
        <ElContainer>
          <ElAside width="400px" style="flex: 2">
            <ElImage :src="loginImg" alt="Login-Image" :draggable="false" />
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
                  @keyup.enter="handleLogin"
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
            <div class="flex -mt-2">
              <ElCheckbox v-model="isSavePwd" label="记住密码" size="small" />
            </div>
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
