<template>
	<v-app-bar app height="56" class="!overflow-visible !bg-grey-lighten-5 !shadow-none">
		<div class="flex h-full w-64 shrink-0 items-center">
			<v-btn class="!h-full !min-w-[56px] rounded-none" @click="appStore.navbarShow = !appStore.navbarShow">
				<v-icon>{{ appStore.navbarShow ? 'format_indent_increase' : 'format_indent_decrease' }}</v-icon>
			</v-btn>
			<svg-icon use="yunlin_logo" class="h-11 w-full"></svg-icon>
		</div>
		<div class="flex h-full w-full items-center" :class="mobile ? 'justify-end' : 'justify-between'">
			<div v-if="!mobile" class="ml-4 text-xl font-bold">Template</div>

			<v-menu :offset="20" class="justify-self-end">
				<template #activator="{ props }">
					<v-btn v-bind="props" :size="40" icon class="mr-3 bg-accent" @click="isMenuShow = !isMenuShow">A</v-btn>
				</template>

				<v-card min-width="300">
					<v-list>
						<v-list-item
							prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
							title="John Leider"
							subtitle="Founder of Vuetify"
						></v-list-item>
					</v-list>

					<v-divider></v-divider>

					<v-list class="!py-0">
						<v-list-item @click="test">Line 綁定</v-list-item>
						<v-list-item @click="logout">登出</v-list-item>
					</v-list>
				</v-card>
			</v-menu>
		</div>
	</v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/store/app';
import { useDisplay } from 'vuetify';

const isMenuShow = ref(false);
const { mobile } = useDisplay();
const appStore = useAppStore();

function test() {
	console.log('test');
}

function logout() {
	console.log('logout');
}
</script>
