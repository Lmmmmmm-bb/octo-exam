<script setup lang="ts">
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

const router = useRouter();
const { isActive: isModifyDrawerVisible, onToggle: onToggleModifyVisible } =
  useToggle();
const { isActive: isInfoDrawerVisible, onToggle: onToggleInfoVisible } =
  useToggle();

const handleLogout = () => {
  router.push('/login');
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
        <ElDropdownItem :icon="Key" @click="onToggleModifyVisible">
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
