import { clearLocal } from '@/common/utils/local-storage';
import { acceptHMRUpdate, createPinia } from 'pinia';
import { useUserConfigStore } from './user-config';
import { useMenuConfigStore } from './menu-config';

const pinia = createPinia();
const stores = [useUserConfigStore, useMenuConfigStore];

const metaHot = import.meta.hot;
if (metaHot) {
  stores.forEach((store) => metaHot.accept(acceptHMRUpdate(store, metaHot)));
}

export const resetStore = () => {
  clearLocal();
  stores.forEach((_) => _().$reset());
};

export * from './user-config';
export * from './menu-config';

export default pinia;
