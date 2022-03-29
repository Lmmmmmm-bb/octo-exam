<script setup lang="ts">
import { ElHeader, ElSpace } from 'element-plus';
import SpaceAvatar from './space-avatar.vue';
import SpaceMenu from './space-menu.vue';
import MenuModeSelector from './menu-mode-selector.vue';
</script>

<template>
  <ElHeader class="flex justify-between items-center">
    <SpaceMenu mode="horizontal" />
    <ElSpace>
      <MenuModeSelector />
      <SpaceAvatar />
    </ElSpace>
  </ElHeader>
</template>
