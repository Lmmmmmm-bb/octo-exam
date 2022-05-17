<script setup lang="ts">
import { ElImage } from 'element-plus';
import { useUserConfigStore } from '@/store';
import DashboardImg from '@/assets/dashboard-admin.webp';
import styles from './index.module.scss';

const userConfigStore = useUserConfigStore();
</script>

<template>
  <div class="outerWrapper flex">
    <div :class="styles.mainWrapper">
      <h2>
        <span :class="styles.homeTitle">欢迎回来&nbsp;</span>
        <span>{{ userConfigStore.userConfig.adminName }}</span>
      </h2>
    </div>
    <div>
      <ElImage :src="DashboardImg" style="width: 540px" :draggable="false" />
    </div>
  </div>
</template>
