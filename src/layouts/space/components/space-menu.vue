<script setup lang="ts">
import { computed, ref, watchEffect, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { AdminMenuNavList, StudentMenuNavList } from '../config';
import { useUserConfigStore } from '@/store';
import { UserRoleEnum } from '@/common/models/user-config';
import { RouterNameEnum } from '@/router/type';
import { useLocale } from '@/common/hooks';

const props = defineProps<{
  mode: 'vertical' | 'horizontal';
}>();

const { t } = useLocale();
const route = useRoute();
const userConfigStore = useUserConfigStore();
const activeKey = ref(RouterNameEnum.Home);

const userNav = computed(() => {
  const { userConfig } = userConfigStore;
  return userConfig.role === UserRoleEnum.Admin
    ? AdminMenuNavList
    : StudentMenuNavList;
});

watchEffect(() => {
  const routeName = route.meta.activeMenu;
  activeKey.value = routeName;
});
</script>

<template>
  <ElMenu
    :class="{ 'w-2/3': props.mode === 'horizontal' }"
    style="border: none"
    :mode="props.mode"
    :default-active="activeKey"
    router
  >
    <template v-for="[key, val] in Object.entries(userNav)" :key="key">
      <ElSubMenu v-if="val.children" :index="key">
        <template #title>{{ t(`menu.${key}`) }}</template>
        <ElMenuItem
          v-for="item in val.children"
          :key="item.key"
          :index="item.key"
          :route="{ name: item.key }"
        >
          {{ t(`menu.${item.key}`) }}
        </ElMenuItem>
      </ElSubMenu>
      <ElMenuItem v-else :index="key" :route="{ name: key }">
        {{ t(`menu.${key}`) }}
      </ElMenuItem>
    </template>
  </ElMenu>
</template>
