<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { ElTag } from 'element-plus';
import { questionLevelMap } from './config';
import { QuestionLevelEnum } from '@/common/models/question';
import { useLocale } from '@/common/hooks';

const props = defineProps<{ level: QuestionLevelEnum }>();

const { t } = useLocale();
const type = computed(() => {
  const { level } = props;
  switch (level) {
    case QuestionLevelEnum.Easy:
      return 'success';
    case QuestionLevelEnum.Medium:
      return '';
    case QuestionLevelEnum.Hard:
      return 'danger';
    default:
      return 'info';
  }
});
</script>

<template>
  <ElTag :type="type">
    {{
      questionLevelMap[props.level]
        ? t(`level.${questionLevelMap[props.level]}`)
        : t('level.unknown')
    }}
  </ElTag>
</template>
