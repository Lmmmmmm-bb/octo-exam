<script setup lang="ts">
import { ElContainer, ElHeader, ElMain } from 'element-plus';
import styles from './index.module.scss';
import SpaceMenu from './components/space-menu.vue';
import SpaceAvatar from './components/space-avatar.vue';
</script>

<template>
  <ElContainer :class="styles.spaceWrapper">
    <ElHeader class="flex justify-between items-center">
      <SpaceMenu />
      <SpaceAvatar />
    </ElHeader>
    <ElMain :class="styles.spaceMain">
      <router-view />
    </ElMain>
  </ElContainer>
</template>

<style></style>
