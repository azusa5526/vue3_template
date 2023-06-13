<template>
	<v-system-bar window height="36" class="!justify-between !bg-white !px-5">
		<div class="flex items-center">
			<svg-icon use="yunlin_logo" class="mr-2 h-6 w-6"></svg-icon>
			<h1 class="text-base font-bold text-black/90">水情圖資展示平台</h1>
		</div>
		<div>
			<v-btn flat :ripple="false">
				<div class="flex items-center">
					<v-icon icon="home" class="text-black !opacity-100"></v-icon>
					<span class="font-bold text-[#074E92]">回單一入口網</span>
				</div>
			</v-btn>
		</div>
	</v-system-bar>
</template>

<script setup lang="ts"></script>
