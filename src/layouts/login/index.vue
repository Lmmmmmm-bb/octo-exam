<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Lock, User } from '@element-plus/icons-vue';
import { ElCard, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import styles from './index.module.scss';
import { FormInstanceType, formRules } from './type';

const router = useRouter();
const formRef = ref<FormInstanceType | null>(null);
const info = reactive({
  username: '',
  password: ''
});

const handleLogin = async () => {
  if (formRef.value) {
    await formRef.value.validate();
    router.push('/space');
  }
};
</script>

<template>
  <div :class="styles.loginWrapper">
    <ElCard :class="styles.loginCard" shadow="hover">
      <h4 class="text-2xl font-semibold mb-8">在线考试系统登陆</h4>
      <ElForm
        ref="formRef"
        label-position="top"
        :model="info"
        :rules="formRules"
        hide-required-asterisk
      >
        <ElFormItem label="用户名" for="username" prop="username">
          <ElInput id="username" v-model="info.username" :prefix-icon="User" />
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
        @click="handleLogin"
      >
        登陆
      </ElButton>
    </ElCard>
  </div>
</template>
