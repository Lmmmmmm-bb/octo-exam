<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import {
  ElCard,
  ElIcon,
  ElTooltip,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElMessageBox
} from 'element-plus';
import { Close } from '@element-plus/icons-vue';
import { IExam } from '@/common/models/exam';
import { http } from '@/common/utils/http';
import { ExamAddAndDeleteApi } from '@/services/exam';
import Copyable from '@/components/copyable/copyable.vue';
import { useLocale } from '@/common/hooks';

const emits = defineEmits<{
  (e: 'onDelete'): void;
}>();

const props = defineProps<{
  exam: IExam;
}>();

const { t } = useLocale();

const handleDeleteExam = async () => {
  try {
    ElMessageBox.confirm(t('exam.deleteConfirm'), t('common.tip'), {
      cancelButtonText: t('common.cancel'),
      confirmButtonText: t('common.confirm')
    }).then(async () => {
      const { examCode } = props.exam;
      await http.deleteRequest(ExamAddAndDeleteApi, {
        params: { list: examCode }
      });
      emits('onDelete');
    });
  } catch (error) {
    // no-console
  }
};
</script>

<template>
  <ElCard shadow="hover">
    <template #header>
      <div class="flex justify-between">
        <p>{{ props.exam.source }} - {{ props.exam.description }}</p>
        <ElTooltip placement="top" effect="light" :content="t('exam.delete')">
          <ElIcon
            class="cursor-pointer"
            color="#b92222"
            @click="handleDeleteExam"
          >
            <Close />
          </ElIcon>
        </ElTooltip>
      </div>
    </template>
    <ElDescriptions :column="2">
      <ElDescriptionsItem :label="t('exam.code')" :span="2">
        <ElTag class="mr-1">
          {{ props.exam.examCode }}
        </ElTag>
        <Copyable
          :copy-text="props.exam.examCode.toString()"
          :tip="t('common.copyable', { target: t('exam.code') })"
        />
      </ElDescriptionsItem>
      <ElDescriptionsItem :label="t('exam.date')">
        {{ props.exam.examDate }}
      </ElDescriptionsItem>
      <ElDescriptionsItem :label="t('exam.duration')">
        {{ props.exam.totalTime }} {{ t('common.minutes') }}
      </ElDescriptionsItem>
      <ElDescriptionsItem :span="2" :label="t('exam.tips')">
        {{ props.exam.tips }}
      </ElDescriptionsItem>
      <ElDescriptionsItem :label="t('profile.institute')">
        {{ props.exam.institute }}
      </ElDescriptionsItem>
      <ElDescriptionsItem :label="t('profile.major')">
        {{ props.exam.major }}
      </ElDescriptionsItem>
      <ElDescriptionsItem :label="t('profile.grade')">
        <ElTag>{{ props.exam.grade }}</ElTag>
      </ElDescriptionsItem>
    </ElDescriptions>
  </ElCard>
</template>
