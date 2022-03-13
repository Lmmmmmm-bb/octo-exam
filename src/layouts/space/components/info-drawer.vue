<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import { UserRoleEnum } from '@/common/models/user-config';
import { useUserConfig } from '@/store';
import {
  ElDrawer,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
} from 'element-plus';
import {
  AdminUserInfoMap,
  BasicUserInfoMap,
  RoleMap,
  StudentUserInfoMap
} from '../config';

const props = defineProps<{ visible: boolean }>();
const emits = defineEmits<{
  (e: 'onClose'): void;
}>();

const userConfigStore = useUserConfig();

const extraInfo = computed(() => {
  const { userConfig } = userConfigStore;
  if (userConfig.role === UserRoleEnum.Admin) {
    return AdminUserInfoMap;
  } else if (userConfig.role === UserRoleEnum.Student) {
    return StudentUserInfoMap;
  }
  return StudentUserInfoMap;
});
</script>

<template>
  <ElDrawer
    :model-value="props.visible"
    :before-close="() => emits('onClose')"
    destroy-on-close
  >
    <template #title>
      <h4 class="text-lg">个人信息</h4>
    </template>
    <ElDescriptions title="基本信息" :column="1">
      <ElDescriptionsItem label="标识" :span="2">
        <ElTag>{{ RoleMap.get(userConfigStore.userConfig.role) }}</ElTag>
      </ElDescriptionsItem>
      <ElDescriptionsItem
        v-for="[key, name] in BasicUserInfoMap"
        :key="key"
        :label="name"
        :min-width="260"
      >
        {{ userConfigStore.userConfig[key] || '-' }}
      </ElDescriptionsItem>
    </ElDescriptions>
    <ElDescriptions class="mt-5" title="其他信息">
      <ElDescriptionsItem
        v-for="[key, name] in extraInfo"
        :key="key"
        :label="name"
      >
        {{ userConfigStore.userConfig[key] || '-' }}
      </ElDescriptionsItem>
    </ElDescriptions>
  </ElDrawer>
</template>
