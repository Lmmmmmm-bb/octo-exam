<script setup lang="ts">
import { useUserConfig } from '@/store';

const userConfigStore = useUserConfig();
</script>

<template>
  <div>{{ userConfigStore.userConfig.studentName }}</div>
</template>
