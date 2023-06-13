<template>
	<div class="flex items-center justify-end gap-x-2">
		<div class="">每頁列數</div>
		<div class="min-w-[72px]">
			<v-select
				v-model="data.pageSizeSelectOption"
				class="input-padding-0"
				:items="pageSizeOptions"
				hide-details
				variant="underlined"
				density="compact"
			></v-select>
		</div>
		<div class="min-w-[144px]">{{ total }} 條中的 {{ currentItemDisplay }} 條</div>
		<div :class="[{ 'opacity-60': isFirstPage }]" role="button" @click="onPrevClick">
			<v-icon>navigate_before</v-icon>
		</div>
		<div :class="[{ 'opacity-60': isLastPage }]" role="button" @click="onNextClick">
			<v-icon>navigate_next</v-icon>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useOffsetPagination, type UseOffsetPaginationReturn, type UseOffsetPaginationOptions } from '@vueuse/core';
import { reactive, watch, isRef, computed, type UnwrapNestedRefs } from 'vue';

const props = withDefaults(
	defineProps<{
		total: UseOffsetPaginationOptions['total'];
		page?: number;
		pageSize?: number;
		onPageChange?: (event: UnwrapNestedRefs<UseOffsetPaginationReturn>) => unknown;
		onPageSizeChange?: (event: UnwrapNestedRefs<UseOffsetPaginationReturn>) => unknown;
		onPageCountChange?: (event: UnwrapNestedRefs<UseOffsetPaginationReturn>) => unknown;
	}>(),
	{
		page: 1,
		pageSize: 5,
	}
);

const total = computed(() => {
	if (!props.total) {
		return 0;
	}
	if (typeof props.total === 'function') {
		return props.total();
	}
	if (isRef(props.total)) {
		return props.total.value;
	}
	return props.total;
});

const data = reactive({
	pageSizeSelectOption: '全部' as number | '全部',
});

const currentItemDisplay = computed(() => {
	const head = (currentPage.value - 1) * currentPageSize.value + 1;
	const tail = isLastPage.value ? total.value : currentPage.value * currentPageSize.value;
	return `${head}~${tail}`;
});

const { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage, prev, next } = useOffsetPagination({
	total: () => total.value,
	page: props.page,
	pageSize: Number.MAX_SAFE_INTEGER,
	onPageChange: props.onPageChange,
	onPageSizeChange: props.onPageSizeChange,
	onPageCountChange: props.onPageCountChange,
});

const pageSizeOptions = computed(() => {
	const arr = [];
	let num = 0;
	while (num < total.value) {
		if (num > 20 * props.pageSize) {
			break;
		}
		num += num >= 4 * props.pageSize ? 2 * props.pageSize : props.pageSize;
		if (num < total.value) {
			arr.push(num);
		}
	}
	arr.push('全部');
	return arr;
});

function onNextClick() {
	if (isLastPage.value) {
		return;
	}
	next();
}
function onPrevClick() {
	if (isFirstPage.value) {
		return;
	}
	prev();
}

watch(
	() => data.pageSizeSelectOption,
	(val) => {
		currentPageSize.value = val === '全部' ? total.value : val;
	}
);

// function log() {
// 	console.group('useOffsetPagination');
// 	console.log('currentPage', currentPage.value);
// 	console.log('currentPageSize', currentPageSize.value);
// 	console.log('pageCount', pageCount.value);
// 	console.log('isFirstPage', isFirstPage.value);
// 	console.log('isLastPage', isLastPage.value);
// 	console.groupEnd();
// }

// window.addEventListener('keydown', (event: KeyboardEvent) => {
// 	if (event.key === 'd') {
// 		log();
// 	}
// });
</script>
<style scoped>
.input-padding-0 {
	--v-input-padding-top: 0 !important;
	--v-field-padding-top: 0 !important;
	--v-field-padding-bottom: 0 !important;
}
</style>
