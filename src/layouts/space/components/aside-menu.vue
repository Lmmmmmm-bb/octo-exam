<script setup lang="ts">
import { ElAside, ElSpace } from 'element-plus';
import SpaceAvatar from './space-avatar.vue';
import SpaceMenu from './space-menu.vue';
import MenuModeSelector from './menu-mode-selector.vue';
</script>

<template>
  <ElAside class="relative">
    <SpaceMenu mode="vertical" />
    <ElSpace class="absolute bottom-2 left-2">
      <SpaceAvatar />
      <MenuModeSelector />
    </ElSpace>
  </ElAside>
</template>
