<script setup lang="ts">
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar
} from 'element-plus';
import { useRouter } from 'vue-router';
import { Back } from '@element-plus/icons-vue';

const router = useRouter();

const handleLogout = () => {
  router.push('/login');
};
</script>

<template>
  <ElDropdown>
    <ElAvatar
      shape="square"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item :icon="Back" divided @click="handleLogout">
          退出登陆
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </ElDropdown>
</template>
