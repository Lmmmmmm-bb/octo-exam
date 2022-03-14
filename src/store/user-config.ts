import { defineStore } from 'pinia';
import { reactive } from 'vue';
import {
  IAdminConfig,
  IStudentConfig,
  UserRoleEnum
} from '@/common/models/user-config';
import { getLocalItem, setLocalItem } from '@/common/utils/local-storage';
import { LocalUserInfoKey } from '@/common/models/store-keys';

export type UserConfigType =
  | (IAdminConfig & IStudentConfig)
  | Record<string, never>;

const initUserConfig = () => {
  const init = getLocalItem(LocalUserInfoKey) || '{}';
  return JSON.parse(init);
};

export const useUserConfigStore = defineStore('user-config', {
  state: () => {
    const userConfig = reactive<UserConfigType>(initUserConfig());

    return {
      userConfig
    };
  },
  getters: {
    isAdminAccount: ({ userConfig }) => userConfig.role === UserRoleEnum.Admin
  },
  actions: {
    patchUserConfig(userConfig: UserConfigType) {
      this.userConfig = userConfig;
    }
  }
});

export const userConfigStorePersist = () => {
  const userConfigStore = useUserConfigStore();
  userConfigStore.$subscribe((_, state) => {
    const { userConfig } = state;
    setLocalItem(LocalUserInfoKey, JSON.stringify(userConfig));
  });
};
