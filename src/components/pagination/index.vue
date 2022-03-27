<script setup lang="ts">
import { defineEmits, withDefaults, defineProps, watch, reactive } from 'vue';
import { ElPagination } from 'element-plus';

const emits = defineEmits<{
  (e: 'page-change'): void;
  (e: 'update:current-page', currentPage: number): void;
  (e: 'update:page-size', pageSize: number): void;
}>();

const props = withDefaults(
  defineProps<{
    total: number;
    currentPage: number;
    pageSize: number;
    class?: string;
    layout?: string;
    pageSizes?: number[];
    background?: boolean;
  }>(),
  {
    class: '',
    layout: 'total, prev, pager, next, sizes',
    pageSizes: () => [10, 20, 50],
    background: false
  }
);

const pageState = reactive({
  current: props.currentPage,
  pageSize: props.pageSize
});

watch(
  () => [props.pageSize, props.currentPage],
  (next) => {
    const [nextPageSize, nextCurrentPage] = next;
    pageState.pageSize = nextPageSize;
    pageState.current = nextCurrentPage;
  }
);

watch(
  () => pageState.current,
  (next) => emits('update:current-page', next)
);

watch(
  () => pageState.pageSize,
  (next) => emits('update:page-size', next)
);

watch(
  () => [pageState.pageSize, pageState.current],
  (next, prev) => {
    const [nextPageSize] = next;
    const [prevPageSize, prevCurrentPage] = prev;
    if (nextPageSize !== prevPageSize && prevCurrentPage !== 1) {
      pageState.current = 1;
      return;
    }
    emits('page-change');
  }
);
</script>

<template>
  <ElPagination
    v-model:currentPage="pageState.current"
    v-model:page-size="pageState.pageSize"
    :class="props.class"
    :layout="props.layout"
    :page-sizes="props.pageSizes"
    :total="props.total"
    :background="props.background"
  />
</template>
