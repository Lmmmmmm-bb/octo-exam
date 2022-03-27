<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import {
  ElCard,
  ElIcon,
  ElTooltip,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElMessageBox
} from 'element-plus';
import { CopyDocument, Check, Close } from '@element-plus/icons-vue';
import { IExam } from '@/common/models/exam';
import { copyable } from '@/common/utils/copy';
import { http } from '@/common/utils/http';
import { ExamAddAndDelete } from '@/services/exam';

const emits = defineEmits<{
  (e: 'onDelete'): void;
}>();

const props = defineProps<{
  exam: IExam;
}>();

const hasCopy = ref(false);

const handleCopyExamCode = () => {
  copyable(props.exam.examCode.toString());
  hasCopy.value = true;
  setTimeout(() => (hasCopy.value = false), 3000);
};

const handleDeleteExam = async () => {
  try {
    ElMessageBox.confirm('确定要删除该考试吗？', '提示', {
      cancelButtonText: '取消',
      confirmButtonText: '确定'
    }).then(async () => {
      const { examCode } = props.exam;
      await http.deleteRequest(ExamAddAndDelete, {
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
        <ElTooltip placement="top" effect="light" content="删除考试">
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
      <ElDescriptionsItem label="考试码" :span="2">
        <ElTag class="mr-1">
          {{ props.exam.examCode }}
        </ElTag>
        <ElTooltip effect="light" placement="top" content="点击复制考试码">
          <ElIcon
            v-if="!hasCopy"
            color="#569cba"
            class="cursor-pointer"
            @click="handleCopyExamCode"
          >
            <CopyDocument />
          </ElIcon>
          <ElIcon v-else color="#46a655">
            <Check />
          </ElIcon>
        </ElTooltip>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="考试时间">
        {{ props.exam.examDate }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="考试时长">
        {{ props.exam.totalTime }} 分钟
      </ElDescriptionsItem>
      <ElDescriptionsItem :span="2" label="备注">
        {{ props.exam.tips }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="学院">
        {{ props.exam.institute }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="专业">
        {{ props.exam.major }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="年级">
        <ElTag>{{ props.exam.grade }}</ElTag>
      </ElDescriptionsItem>
    </ElDescriptions>
  </ElCard>
</template>
