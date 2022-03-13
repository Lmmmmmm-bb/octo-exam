<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { MenuItemEnum } from '../types';
import { MenuNavList } from '../config';
// import { useUserConfig } from '@/store';

const router = useRouter();
// const userConfigStore = useUserConfig();
const activeKey = ref<string>(MenuItemEnum.Home);

watchEffect(() => {
  const routeName = router.currentRoute.value.name as string;
  activeKey.value = routeName;
});
</script>

<template>
  <ElMenu class="w-2/3" mode="horizontal" :default-active="activeKey" router>
    <ElMenuItem
      v-for="[key, name] in MenuNavList"
      :key="key"
      :index="key"
      :route="{ name: key }"
    >
      {{ name }}
    </ElMenuItem>
  </ElMenu>
</template>
