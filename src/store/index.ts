import { acceptHMRUpdate } from 'pinia';
import { useCounterStore } from './counter';
import { useAuthStore } from './auth';
import { useUserConfig } from './user-config';

const stores = [useCounterStore, useAuthStore, useUserConfig];

const metaHot = import.meta.hot;
if (metaHot) {
  stores.forEach((store) => metaHot.accept(acceptHMRUpdate(store, metaHot)));
}

export * from './counter';
export * from './auth';
export * from './user-config';
