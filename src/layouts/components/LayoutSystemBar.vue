<template>
	<v-system-bar window height="36" class="!justify-between !bg-white !px-4">
		<div class="flex items-center">
			<v-btn flat icon class="mr-2 !h-full !w-[30px] rounded-none" @click="appStore.navbarShow = !appStore.navbarShow">
				<v-icon>{{ appStore.navbarShow ? 'format_indent_increase' : 'format_indent_decrease' }}</v-icon>
			</v-btn>
			<h1 class="text-base font-bold text-black/90">Template</h1>
		</div>
		<div>
			<v-btn flat :ripple="false">
				<div class="flex items-center">
					<v-icon icon="home" class="mr-2 text-black !opacity-100"></v-icon>
					<span class="font-bold text-[#074E92]">Home</span>
				</div>
			</v-btn>
		</div>
	</v-system-bar>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
</script>
