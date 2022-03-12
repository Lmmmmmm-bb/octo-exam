import { acceptHMRUpdate } from 'pinia';
import { useCounterStore } from './counter';
import { useAuthStore } from './auth';

const stores = [useCounterStore, useAuthStore];

const metaHot = import.meta.hot;
if (metaHot) {
  stores.forEach((store) => metaHot.accept(acceptHMRUpdate(store, metaHot)));
}

export * from './counter';
export * from './auth';
