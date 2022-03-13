import { acceptHMRUpdate } from 'pinia';
import { useUserConfig } from './user-config';

const stores = [useUserConfig];

const metaHot = import.meta.hot;
if (metaHot) {
  stores.forEach((store) => metaHot.accept(acceptHMRUpdate(store, metaHot)));
}
export * from './user-config';
