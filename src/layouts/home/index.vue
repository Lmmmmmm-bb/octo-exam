<script setup lang="ts">
import { useUserConfigStore } from '@/store';

const userConfigStore = useUserConfigStore();
</script>

<template>
  <div>{{ userConfigStore.userConfig.studentName }}</div>
</template>
