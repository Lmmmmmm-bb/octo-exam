<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { ExportedGlobalComposer } from 'vue-i18n';
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon
} from 'element-plus';
import { ArrowDown } from '@element-plus/icons-vue';
import { useLocale } from '@/common/hooks';
import { LocaleType, LocaleTypeEnum } from '@/locales/type';
import { setLocalItem } from '@/common/utils/local-storage';
import { LocalLocaleKey } from '@/common/models/store-keys';
import { localeMap } from './config';

const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {
    class: 'text-xs'
  }
);

const handleLocaleChange = (
  lang: LocaleType,
  i18nInstance: ExportedGlobalComposer
) => {
  i18nInstance.locale = lang;
  setLocalItem(LocalLocaleKey, lang);
};

const { t } = useLocale();
</script>

<template>
  <ElDropdown
    class="flex items-center justify-center"
    @command="(lang) => handleLocaleChange(lang, $i18n)"
  >
    <span :class="`flex items-center cursor-pointer ${props.class}`">
      {{ t('common.locale') }}
      <ElIcon class="el-icon--right">
        <ArrowDown />
      </ElIcon>
    </span>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="lang in $i18n.availableLocales"
          :key="lang"
          :command="lang"
        >
          {{ localeMap.get(lang as LocaleTypeEnum) }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
