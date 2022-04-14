import { createI18n } from 'vue-i18n';
import { LocaleType, LocaleTypeEnum } from './type';
import { enUS } from './en-US';
import { zhCN } from './zh-CN';
import { getLocalItem } from '@/common/utils/local-storage';
import { LocalLocaleKey } from '@/common/configs';

type MessageSchema = typeof enUS;

const initI18nLocale = (): LocaleType => {
  const locale = getLocalItem(LocalLocaleKey);
  if (locale === LocaleTypeEnum.EN_US || locale === LocaleTypeEnum.ZH_CN) {
    return locale;
  }
  return LocaleTypeEnum.ZH_CN;
};

export const i18n = createI18n<[MessageSchema], LocaleType>({
  legacy: false,
  locale: initI18nLocale(),
  fallbackLocale: LocaleTypeEnum.ZH_CN,
  messages: {
    [LocaleTypeEnum.EN_US]: enUS,
    [LocaleTypeEnum.ZH_CN]: zhCN
  }
});
