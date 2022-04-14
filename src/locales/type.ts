import { zhCN } from './zh-CN';

export type LocaleType = 'en-US' | 'zh-CN';

export type MessageSchemaType = typeof zhCN;

export enum LocaleTypeEnum {
  EN_US = 'en-US',
  ZH_CN = 'zh-CN'
}
