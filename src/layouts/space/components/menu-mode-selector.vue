<script setup lang="ts">
import { ElTooltip, ElSelect, ElOption } from 'element-plus';
import { useMenuConfigStore, MenuModeType } from '@/store';
import { computed } from 'vue';

const menuModeStore = useMenuConfigStore();

const tipPlacement = computed(() =>
  menuModeStore.isMenuModeVertical ? 'top' : 'bottom'
);

const handleModeChange = (mode: MenuModeType) =>
  (menuModeStore.menuMode = mode);
</script>

<template>
  <ElTooltip
    effect="light"
    content="切换菜单展示模式"
    :placement="tipPlacement"
  >
    <ElSelect
      v-model="menuModeStore.menuMode"
      style="width: 82px"
      size="small"
      @change="handleModeChange"
    >
      <ElOption label="顶部菜单" value="horizontal" />
      <ElOption label="侧边菜单" value="vertical" />
    </ElSelect>
  </ElTooltip>
</template>
