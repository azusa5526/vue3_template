<template>
	<v-main class="!max-h-[calc(var(--app-height,100vh))] overflow-hidden">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :key="route.name" />
			</transition>
		</router-view>
	</v-main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
