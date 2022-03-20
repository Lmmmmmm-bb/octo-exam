<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { AdminMenuNavList, StudentMenuNavList } from '../config';
import { useUserConfigStore } from '@/store';
import { UserRoleEnum } from '@/common/models/user-config';
import { RouterNameEnum } from '@/router/type';

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
  <ElMenu class="w-2/3" mode="horizontal" :default-active="activeKey" router>
    <template v-for="[key, val] in Object.entries(userNav)" :key="key">
      <ElSubMenu v-if="val.children" :index="key">
        <template #title>{{ val.label }}</template>
        <ElMenuItem
          v-for="item in val.children"
          :key="item.key"
          :index="item.key"
          :route="{ name: item.key }"
        >
          {{ item.label }}
        </ElMenuItem>
      </ElSubMenu>
      <ElMenuItem v-else :index="key" :route="{ name: key }">
        {{ val.label }}
      </ElMenuItem>
    </template>
  </ElMenu>
</template>
