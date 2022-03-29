<script setup lang="ts">
import { reactive, ref, shallowRef } from 'vue';
import { ElContainer, ElMain } from 'element-plus';
import styles from './index.module.scss';
import { useMenuConfigStore } from '@/store';
import HeaderMenu from './components/header-menu.vue';
import AsideMenu from './components/aside-menu.vue';

const menuConfigStore = useMenuConfigStore();

const isShow = ref(true);
const menuComponent = shallowRef(
  menuConfigStore.isMenuModeVertical ? AsideMenu : HeaderMenu
);
const containerStyle = reactive({
  flexDirection: menuConfigStore.isMenuModeVertical ? 'row' : 'column'
});

menuConfigStore.$subscribe(() => {
  const { isMenuModeVertical } = menuConfigStore;
  isShow.value = false;
  setTimeout(() => {
    containerStyle.flexDirection = isMenuModeVertical ? 'row' : 'column';
    menuComponent.value = isMenuModeVertical ? AsideMenu : HeaderMenu;
  }, 300);
  setTimeout(() => (isShow.value = true), 1000);
});
</script>

<template>
  <Transition name="el-fade-in-linear">
    <ElContainer
      v-show="isShow"
      :class="styles.spaceWrapper"
      :style="containerStyle"
    >
      <Component :is="menuComponent" />
      <ElMain :class="styles.spaceMain">
        <router-view />
      </ElMain>
    </ElContainer>
  </Transition>
</template>

<style></style>
