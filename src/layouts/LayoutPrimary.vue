<template>
	<!-- <layout-app-bar></layout-app-bar> -->
	<layout-system-bar />
	<layout-nav-drawer></layout-nav-drawer>
	<layout-content></layout-content>
</template>

<script lang="ts" setup>
import LayoutAppBar from './components/LayoutAppBar.vue';
import LayoutSystemBar from './components/LayoutSystemBar.vue';
import LayoutNavDrawer from '@/layouts/components/LayoutNavDrawer.vue';
import LayoutContent from '@/layouts/components/LayoutContent.vue';
</script>
