import { acceptHMRUpdate, createPinia } from 'pinia';
import { removeLocalItem } from '@/common/utils/local-storage';
import { useUserConfigStore } from './user-config';
import { useMenuConfigStore } from './menu-config';
import { LocalUserInfoKey, LocalTokenKey } from '@/common/models/store-keys';

const pinia = createPinia();
const stores = [useUserConfigStore, useMenuConfigStore];

const metaHot = import.meta.hot;
if (metaHot) {
  stores.forEach((store) => metaHot.accept(acceptHMRUpdate(store, metaHot)));
}

export const resetStore = () => {
  const removeKeys = [LocalUserInfoKey, LocalTokenKey];
  removeKeys.forEach((key) => removeLocalItem(key));
  stores.forEach((_) => _().$reset());
};

export * from './user-config';
export * from './menu-config';

export default pinia;
