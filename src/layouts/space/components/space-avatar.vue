<script setup lang="ts">
import { inject } from 'vue';
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar
} from 'element-plus';
import { useRouter } from 'vue-router';
import { Back, Key, Document } from '@element-plus/icons-vue';
import { useToggle } from '@/common/hooks';
import ModifyDrawer from './modify-drawer.vue';
import InfoDrawer from './info-drawer.vue';
import { resetStore, useUserConfigStore } from '@/store';
import { RouterNameEnum } from '@/router/type';
import { MotionInstance } from '@vueuse/motion';

const motionInstance = inject<MotionInstance>('motion-instance');

const router = useRouter();
const userConfigStore = useUserConfigStore();
const { isActive: isModifyDrawerVisible, onToggle: onToggleModifyVisible } =
  useToggle();
const { isActive: isInfoDrawerVisible, onToggle: onToggleInfoVisible } =
  useToggle();

const handleLogout = () => {
  motionInstance &&
    motionInstance.leave(async () => {
      await router.push({ name: RouterNameEnum.Login });
      resetStore();
    });
};
</script>

<template>
  <ElDropdown>
    <ElAvatar
      class="cursor-pointer"
      shape="square"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem :icon="Document" @click="onToggleInfoVisible">
          个人信息
        </ElDropdownItem>
        <ElDropdownItem
          v-if="!userConfigStore.isAdminAccount"
          :icon="Key"
          @click="onToggleModifyVisible"
        >
          修改密码
        </ElDropdownItem>
        <ElDropdownItem :icon="Back" divided @click="handleLogout">
          退出登陆
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
  <InfoDrawer :visible="isInfoDrawerVisible" @on-close="onToggleInfoVisible" />
  <ModifyDrawer
    :visible="isModifyDrawerVisible"
    @on-close="onToggleModifyVisible"
  />
</template>
