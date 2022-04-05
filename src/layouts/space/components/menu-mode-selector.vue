<script setup lang="ts">
import { computed } from 'vue';
import { ElTooltip, ElSelect, ElOption } from 'element-plus';
import { useMenuConfigStore, MenuModeType } from '@/store';
import { useLocale } from '@/common/hooks';

const { t } = useLocale();
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
    :content="t('menuMode.modeTip')"
    :placement="tipPlacement"
  >
    <ElSelect
      v-model="menuModeStore.menuMode"
      style="width: 91px"
      size="small"
      @change="handleModeChange"
    >
      <ElOption :label="t('menuMode.horizontalMode')" value="horizontal" />
      <ElOption :label="t('menuMode.verticalMode')" value="vertical" />
    </ElSelect>
  </ElTooltip>
</template>
