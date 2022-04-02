<script setup lang="ts">
import { defineEmits, defineProps, computed } from 'vue';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { ElSpace, ElButton, ElIcon } from 'element-plus';

const emits = defineEmits<{
  (e: 'onClickPrev'): void;
  (e: 'onClickNext'): void;
  (e: 'onSubmitAnswer'): void;
}>();

const props = defineProps<{
  total: number;
  currentLength: number;
  currentIndex: number;
}>();

const isSheetDone = computed(() => {
  const { currentLength, total } = props;
  return currentLength === total;
});

const isFirstQuestion = computed(() => props.currentIndex === 0);

const isLastQuestion = computed(() => {
  const { currentIndex, total } = props;
  return currentIndex === total - 1;
});
</script>

<template>
  <ElSpace id="question-switch" class="w-full justify-center" size="large">
    <ElButton
      v-show="!isFirstQuestion"
      id="prev-step"
      type="text"
      :icon="ArrowLeft"
      @click="emits('onClickPrev')"
    >
      上一题
    </ElButton>
    <ElButton
      v-show="!isLastQuestion"
      id="next-step"
      type="text"
      @click="emits('onClickNext')"
    >
      下一题
      <ElIcon class="el-icon--right">
        <ArrowRight />
      </ElIcon>
    </ElButton>
    <ElButton
      v-show="isSheetDone || isLastQuestion"
      type="primary"
      plain
      @click="emits('onSubmitAnswer')"
    >
      提交答题卡
    </ElButton>
  </ElSpace>
</template>
