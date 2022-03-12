<script setup lang="ts">
import { VueQueryDevTools } from 'vue-query/devtools';
import {
  ButtonConfigContext,
  ElConfigProvider,
  MessageConfigContext
} from 'element-plus';

const elButtonConfig: ButtonConfigContext = { autoInsertSpace: true };
const elMessageConfig: MessageConfigContext = { max: 3 };
</script>

<template>
  <ElConfigProvider :button="elButtonConfig" :message="elMessageConfig">
    <router-view />
  </ElConfigProvider>
  <VueQueryDevTools />
</template>
