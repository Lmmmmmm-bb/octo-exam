<script setup lang="ts">
import { RouterNameEnum } from '@/router/type';
import EmptyLink from '@/components/empty-link/index.vue';
import { resetStore } from '@/store';

const handleClickLink = () => {
  resetStore();
};
</script>

<template>
  <EmptyLink
    style="height: 100%"
    desc="Not Found"
    :link-props="{
      to: { name: RouterNameEnum.Login },
      text: '返回登陆',
      onClick: handleClickLink
    }"
  />
</template>
