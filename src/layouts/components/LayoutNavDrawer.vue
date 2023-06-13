<template>
	<v-navigation-drawer
		rail-width="56"
		v-bind="drawerAddOnProps"
		:scrim="true"
		class="!h-[calc(var(--app-height,100vh)-36px)] bg-secondary"
		@update:model-value="navbarShow = !navbarShow"
	>
		<layout-nav-drawer-list
			class="hide-scroll-bar !h-[calc(var(--app-height,100vh)-136px)] flex-grow overflow-y-scroll"
		></layout-nav-drawer-list>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
import LayoutNavDrawerList from './LayoutNavDrawerList.vue';
import { useDisplay } from 'vuetify';
import { computed, watch } from 'vue';

const appStore = useAppStore();
const { navbarShow } = storeToRefs(appStore);
const { mobile } = useDisplay();

watch(mobile, (newVal) => {
	if (newVal) navbarShow.value = false;
});

const drawerAddOnProps = computed(() => {
	return mobile.value ? { modelValue: navbarShow.value } : { rail: navbarShow.value };
});
</script>

<style lang="scss" scoped>
.v-navigation-drawer .v-list {
	overflow-y: scroll !important;
}
</style>
