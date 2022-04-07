<script setup lang="ts">
import { reactive, ref, shallowRef, provide } from 'vue';
import { ElContainer, ElMain } from 'element-plus';
import { useMotion } from '@vueuse/motion';
import styles from './index.module.scss';
import { useMenuConfigStore } from '@/store';
import HeaderMenu from './components/header-menu.vue';
import AsideMenu from './components/aside-menu.vue';
import { baseMotionConfig } from '@/common/configs';
import { motionInstanceInjectKey } from './config';

const menuConfigStore = useMenuConfigStore();

const spaceWrapperRef = ref<HTMLElement>();
const menuComponent = shallowRef(
  menuConfigStore.isMenuModeVertical ? AsideMenu : HeaderMenu
);
const containerStyle = reactive({
  flexDirection: menuConfigStore.isMenuModeVertical ? 'row' : 'column'
});

const motionInstance = useMotion(spaceWrapperRef, baseMotionConfig);

menuConfigStore.$subscribe(async () => {
  const { isMenuModeVertical } = menuConfigStore;
  await motionInstance.leave(() => {
    containerStyle.flexDirection = isMenuModeVertical ? 'row' : 'column';
    menuComponent.value = isMenuModeVertical ? AsideMenu : HeaderMenu;
  });
  await motionInstance.apply('initial');
  await motionInstance.apply('enter');
});

provide(motionInstanceInjectKey, motionInstance);
</script>

<template>
  <ElContainer
    ref="spaceWrapperRef"
    :class="styles.spaceWrapper"
    :style="containerStyle"
  >
    <Component :is="menuComponent" />
    <ElMain :class="styles.spaceMain">
      <router-view />
    </ElMain>
  </ElContainer>
</template>

<style></style>
