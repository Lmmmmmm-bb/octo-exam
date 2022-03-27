<script setup lang="ts">
import { ref, withDefaults, defineEmits, defineProps } from 'vue';
import { ElIcon, ElTooltip } from 'element-plus';
import { Check, CopyDocument } from '@element-plus/icons-vue';
import { copyable } from '@/common/utils/copy';
import { TooltipPlacementType } from '../tooltip-icon-button/type';

const emits = defineEmits<{
  (e: 'onCopy'): void;
}>();

const props = withDefaults(
  defineProps<{
    copyText: string;
    tip?: string;
    tipPlacement?: TooltipPlacementType;
  }>(),
  {
    tip: '点击复制',
    tipPlacement: 'top'
  }
);

const isCopyState = ref(false);

const handleCopy = () => {
  emits('onCopy');
  copyable(props.copyText);
  isCopyState.value = true;
  setTimeout(() => (isCopyState.value = false), 3000);
};
</script>

<template>
  <ElTooltip
    effect="light"
    :placement="props.tipPlacement"
    :content="props.tip"
  >
    <ElIcon v-if="isCopyState" color="#569cba">
      <Check />
    </ElIcon>
    <ElIcon v-else class="cursor-pointer" color="#46a655" @click="handleCopy">
      <CopyDocument />
    </ElIcon>
  </ElTooltip>
</template>
