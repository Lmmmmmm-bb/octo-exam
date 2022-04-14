<script setup lang="ts">
import { defineProps } from 'vue';
import {
  ElCollapse,
  ElCollapseItem,
  ElTag,
  ElDescriptions,
  ElDescriptionsItem
} from 'element-plus';
import { IJudgeQuestion } from '@/common/models/question';
import LevelTag from '@/components/level-tag/index.vue';
import TrueFalseAnswerTag from './true-false-answer-tag.vue';
import Copyable from '@/components/copyable/copyable.vue';
import { useLocale } from '@/common/hooks';

const props = defineProps<{
  questionList: IJudgeQuestion[];
}>();

const { t } = useLocale();
</script>

<template>
  <ElCollapse accordion>
    <ElCollapseItem
      v-for="question of props.questionList"
      :key="question.questionId"
      :name="question.questionId"
    >
      <template #title>
        <div class="text-base">
          <ElTag>{{ question.questionId }}</ElTag>
          <span class="ml-3">{{ question.question }}</span>
        </div>
      </template>
      <ElDescriptions :column="2">
        <ElDescriptionsItem :label="t('question.id')" :span="2">
          <ElTag class="mr-1">
            {{ question.questionId }}
          </ElTag>
          <Copyable
            :tip="t('common.copyable', { target: t('question.id') })"
            tip-placement="right"
            :copy-text="question.questionId.toString()"
          />
        </ElDescriptionsItem>
        <ElDescriptionsItem :label="t('score.score')">
          {{ question.score }}
        </ElDescriptionsItem>
        <ElDescriptionsItem :label="t('question.level')">
          <LevelTag :level="question.level" />
        </ElDescriptionsItem>
        <ElDescriptionsItem :label="t('score.subject')">
          {{ question.subject }}
        </ElDescriptionsItem>
        <ElDescriptionsItem :label="t('question.section')">
          {{ question.section || t('question.noSection') }}
        </ElDescriptionsItem>
        <ElDescriptionsItem :label="t('question.analysis')" :span="2">
          {{ question.analysis || t('question.noAnalysis') }}
        </ElDescriptionsItem>
        <ElDescriptionsItem :label="t('question.answer')">
          <TrueFalseAnswerTag :answer="question.answer" />
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElCollapseItem>
  </ElCollapse>
</template>
