<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/index.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { breadcrumbConfig } from './config';
import styles from './index.module.scss';

const route = useRoute();

onMounted(() => {
  const { id } = route.params;
  console.log(id);
});
</script>

<template>
  <div :class="styles.multipleChoiceDetailWrapper">
    <Breadcrumb :path="breadcrumbConfig" />
  </div>
</template>
