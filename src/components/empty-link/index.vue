<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { ElEmpty, ElLink } from 'element-plus';
import { RouteLocationRaw, useRouter } from 'vue-router';

const props = withDefaults(
  defineProps<{
    desc?: string;
    linkProps?: {
      to: RouteLocationRaw;
      text: string;
      onClick?: () => void;
    } | null;
  }>(),
  {
    desc: '未找到数据',
    linkProps: null
  }
);

const router = useRouter();

const handleClickLink = () => {
  const { linkProps } = props;
  if (linkProps) {
    linkProps.onClick && linkProps.onClick();
    router.push(linkProps.to);
  }
};
</script>

<template>
  <ElEmpty :description="props.desc">
    <slot name="default" />
    <ElLink v-if="props.linkProps" @click="handleClickLink">
      {{ props.linkProps.text }}
    </ElLink>
  </ElEmpty>
</template>
