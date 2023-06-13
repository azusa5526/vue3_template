<template>
	<v-main>
		<v-container fluid class="flex h-full flex-col !flex-nowrap items-center !p-0">
			<div class="flex flex-col pt-[7vh]">
				<svg-icon use="ana_cloud" class="mb-4 h-[5.5rem] w-[7.875rem]"></svg-icon>

				<div class="relative">
					<svg-icon use="login_title" class="h-5 w-32"></svg-icon>
					<svg-icon use="login_subtitle" class="absolute ml-1 h-3 w-7"></svg-icon>
				</div>
			</div>

			<div class="relative flex h-full w-full justify-center bg-cover bg-no-repeat">
				<div class="relative flex w-full max-w-[600px] flex-col items-center justify-end px-8 pb-[4.5vh]">
					<router-view></router-view>
				</div>
			</div>
		</v-container>
	</v-main>
</template>

<script setup lang="ts"></script>
<style scoped></style>
