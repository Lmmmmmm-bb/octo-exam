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

const props = defineProps<{
  questionList: IJudgeQuestion[];
}>();
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
        <ElDescriptionsItem label="题目编号" :span="2">
          <ElTag class="mr-1">
            {{ question.questionId }}
          </ElTag>
          <Copyable
            tip="点击复制题目编号"
            tip-placement="right"
            :copy-text="question.questionId.toString()"
          />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="分数">
          {{ question.score }} 分
        </ElDescriptionsItem>
        <ElDescriptionsItem label="难度">
          <LevelTag :level="question.level" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="科目">
          {{ question.subject }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="所属章节">
          {{ question.section || '暂无章节信息' }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="题目解析" :span="2">
          {{ question.analysis || '暂无解析' }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="正确答案">
          <TrueFalseAnswerTag :answer="question.answer" />
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElCollapseItem>
  </ElCollapse>
</template>
