<script setup lang="ts">
import { defineProps } from 'vue';
import { ElIcon } from 'element-plus';
import { Check, Close } from '@element-plus/icons-vue';

const props = defineProps<{ answer: 'T' | 'F' }>();
</script>

<template>
  <ElIcon v-if="props.answer === 'T'" color="#569cba">
    <Check />
  </ElIcon>
  <ElIcon v-else color="#b92222">
    <Close />
  </ElIcon>
</template>
