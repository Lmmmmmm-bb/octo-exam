<script setup lang="ts">
import { ElHeader, ElSpace } from 'element-plus';
import SpaceAvatar from './space-avatar.vue';
import SpaceMenu from './space-menu.vue';
import MenuModeSelector from './menu-mode-selector.vue';
import LanguageSelector from '@/components/language-selector/index.vue';
</script>

<template>
  <ElHeader class="flex justify-between items-center">
    <SpaceMenu mode="horizontal" />
    <ElSpace>
      <LanguageSelector />
      <MenuModeSelector />
      <SpaceAvatar />
    </ElSpace>
  </ElHeader>
</template>
