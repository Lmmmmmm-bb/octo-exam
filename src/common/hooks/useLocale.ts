import { useI18n } from 'vue-i18n';
import { enUS } from '@/locales/en-US';
import { zhCN } from '@/locales/zh-CN';
import { LocaleType, LocaleTypeEnum, MessageSchemaType } from '@/locales/type';

export const useLocale = () => {
  return useI18n<
    {
      message: MessageSchemaType;
    },
    LocaleType
  >({
    messages: {
      [LocaleTypeEnum.EN_US]: enUS,
      [LocaleTypeEnum.ZH_CN]: zhCN
    }
  });
};
