<template>
	<div
		class="hidden-scrollbar fixed right-4 top-12 z-[2500] ml-4 h-auto max-h-[calc(100vh-150px)] max-w-sm select-none overflow-auto overflow-y-auto overflow-x-hidden !text-sm"
	>
		<div v-for="item in refs.alerts.value" :key="item.id" class="mb-4">
			<v-alert
				class="flex min-w-[343px] bg-white/90"
				:class="{ 'pr-10': item.props?.closable }"
				v-bind="item.props"
				:data-alert="item.type"
			>
				<template #title></template>
				<template #text>
					<div class="flex">
						<p v-if="item.title || item.props?.title" class="mr-1 w-[88px] shrink-0 font-bold">
							{{ item.title || item.props?.title }}
						</p>
						<p v-if="item.props?.text">{{ item.props.text }}</p>
					</div>
				</template>
			</v-alert>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useAlertStore } from '@/store';
import { storeToRefs } from 'pinia';

const alert = useAlertStore();
const refs = storeToRefs(alert);
</script>
<style scoped>
.hidden-scrollbar::-webkit-scrollbar {
	width: 0px;
}

:deep(.v-alert__close) {
	margin-inline-start: unset;
}

:deep(.v-alert__prepend) {
	align-self: center;
}

:deep(.v-alert__close) {
	position: absolute;
	right: 0.5rem;
	top: 50%;
	transform: translateY(-50%);
}
</style>
