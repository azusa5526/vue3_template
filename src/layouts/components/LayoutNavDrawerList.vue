<template>
	<v-list class="bg-secondary !py-0">
		<v-list-item
			v-for="(item, index) in menuItems"
			:key="index"
			class="flex select-none !p-0 last:mb-0"
			@click="item.click"
		>
			<template #prepend>
				<div class="flex h-14 w-14 items-center justify-center">
					<svg-icon v-if="item.icon.type === 'svg-icon'" :use="item.icon.name" class="h-6 w-6 text-white"></svg-icon>
					<v-icon v-else class="text-white !opacity-100">{{ item.icon.name }}</v-icon>
				</div>
				<div class="ml-3 text-lg font-bold">{{ item.title }}</div>
			</template>
		</v-list-item>
	</v-list>
</template>

<script setup lang="ts">
import { reactive, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface MenuItem {
	icon: { type: 'md' | 'svg-icon'; name: string | Ref<string> };
	title: string;
	click: (...args: any[]) => void;
}

const menuItems: MenuItem[] = reactive([
	{
		icon: { type: 'md', name: 'history' },
		title: 'default',
		click() {
			router.push({ name: 'Default' });
		},
	},
]);
</script>
