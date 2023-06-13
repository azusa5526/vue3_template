<template>
	<v-app>
		<router-view />
		<alert-snack />
	</v-app>
</template>

<script setup lang="ts">
import AlertSnack from '@/components/AlertSnack.vue';
import { onMounted } from 'vue';

function appHeight() {
	const doc = document.documentElement;
	doc.style.setProperty('--app-height', `${window.innerHeight}px`);
	doc.style.setProperty('--vh', `${window.innerHeight / 100}px`);
}

onMounted(() => {
	appHeight();
});

window.addEventListener('resize', appHeight);
</script>

<style lang="scss">
@import '@/styles/global.scss';
</style>
