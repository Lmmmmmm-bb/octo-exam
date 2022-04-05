<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import {
  ElDrawer,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
} from 'element-plus';
import { UserRoleEnum } from '@/common/models/user-config';
import { useUserConfigStore } from '@/store';
import {
  AdminUserInfoMap,
  BasicUserInfoMap,
  RoleMap,
  StudentUserInfoMap
} from '../config';
import { useLocale } from '@/common/hooks';

const props = defineProps<{ visible: boolean }>();
const emits = defineEmits<{
  (e: 'onClose'): void;
}>();

const { t } = useLocale();
const userConfigStore = useUserConfigStore();

const extraInfo = computed(() => {
  const { userConfig } = userConfigStore;
  return userConfig.role === UserRoleEnum.Admin
    ? AdminUserInfoMap
    : StudentUserInfoMap;
});
</script>

<template>
  <ElDrawer :model-value="props.visible" :before-close="() => emits('onClose')">
    <template #title>
      <h4 class="text-lg">{{ t('profile.personal') }}</h4>
    </template>
    <ElDescriptions :title="t('profile.basic')" :column="1">
      <ElDescriptionsItem :label="t('profile.account')" :span="2">
        <ElTag>{{ RoleMap.get(userConfigStore.userConfig.role) }}</ElTag>
      </ElDescriptionsItem>
      <ElDescriptionsItem
        v-for="[key] in BasicUserInfoMap"
        :key="key"
        :label="t(`profile.${key}`)"
        :min-width="260"
      >
        {{ userConfigStore.userConfig[key] || '-' }}
      </ElDescriptionsItem>
    </ElDescriptions>
    <ElDescriptions class="mt-5" :title="t('profile.other')" :column="2">
      <ElDescriptionsItem
        v-for="[key] in extraInfo"
        :key="key"
        :label="t(`profile.${key}`)"
      >
        {{ userConfigStore.userConfig[key] || '-' }}
      </ElDescriptionsItem>
    </ElDescriptions>
  </ElDrawer>
</template>
