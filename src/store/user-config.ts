import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { IAdminConfig, IStudentConfig } from '@/common/models/user-config';

export const useUserConfig = defineStore(
  'user-config',
  () => {
    const userConfig = reactive<
      (IAdminConfig & IStudentConfig) | Record<string, never>
    >({});

    return {
      userConfig
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage,
          paths: ['userConfig']
        }
      ]
    }
  }
);
