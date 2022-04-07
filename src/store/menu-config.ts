import { ref } from 'vue';
import { defineStore } from 'pinia';
import { LocalMenuModeKey } from '@/common/configs';
import { getLocalItem, setLocalItem } from '@/common/utils/local-storage';

export type MenuModeType = 'horizontal' | 'vertical';

const initMenuConfig = (): MenuModeType => {
  const init = getLocalItem(LocalMenuModeKey) || 'horizontal';
  if (init === 'horizontal' || init === 'vertical') {
    return init;
  }
  return 'horizontal';
};

export const useMenuConfigStore = defineStore('menu-config', {
  state: () => {
    const menuMode = ref<MenuModeType>(initMenuConfig());

    return {
      menuMode
    };
  },
  getters: {
    isMenuModeVertical: ({ menuMode }) => menuMode === 'vertical'
  }
});

export const menuConfigStorePersist = () => {
  const menuConfigStore = useMenuConfigStore();
  menuConfigStore.$subscribe((_, state) => {
    const { menuMode } = state;
    setLocalItem(LocalMenuModeKey, menuMode);
  });
};
