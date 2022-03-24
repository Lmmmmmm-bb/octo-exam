<script setup lang="ts">
import { Component, defineEmits, defineProps, withDefaults } from 'vue';
import { ElTooltip, ElButton, ButtonType } from 'element-plus';
import { TooltipPlacementType } from './type';

const props = withDefaults(
  defineProps<{
    icon: Component;
    content: string;
    type?: ButtonType;
    circle?: boolean;
    plain?: boolean;
    placement?: TooltipPlacementType;
    disabled?: boolean;
  }>(),
  {
    type: '',
    circle: true,
    plain: true,
    placement: 'top',
    disabled: false
  }
);

const emits = defineEmits<{
  (e: 'onClick'): void;
}>();
</script>

<template>
  <ElTooltip v-bind="props" effect="light">
    <ElButton v-bind="props" @click="emits('onClick')" />
  </ElTooltip>
</template>
