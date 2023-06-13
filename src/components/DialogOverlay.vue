<template>
	<v-dialog
		:model-value="dialogShow"
		fullscreen
		persistent
		:no-click-animation="$props.dialog?.noClickAnimation"
		transition="dialog-bottom-transition"
	>
		<div class="flex h-[var(--app-height)] flex-col bg-white">
			<div class="relative h-14 shrink-0">
				<v-row
					no-gutters
					class="h-14 after:absolute after:-bottom-[-2px] after:left-3 after:h-0.5 after:w-[calc(100vw-24px)] after:shadow-[0_2px_0_0_theme(colors.primary.DEFAULT)] after:content-['']"
				>
					<v-col cols="3" class="flex items-center justify-start">
						<v-btn icon flat color="transparent" @click="closeDialog">
							<v-icon icon="arrow_back_ios_new" class="text-primary"></v-icon>
						</v-btn>
					</v-col>
					<v-col cols="6" class="flex items-center justify-center overflow-hidden text-base font-normal">
						{{ title }}
					</v-col>
					<v-col cols="3" class="flex items-center justify-end"></v-col>
				</v-row>
			</div>

			<slot></slot>
		</div>
	</v-dialog>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { VDialog } from 'vuetify/components/VDialog';
defineProps({
	title: {
		type: String,
		default: '',
	},

	dialogShow: {
		type: Boolean,
		default: false,
	},

	dialog: {
		type: Object as PropType<VDialog['$props']>,
		default: () => ({}),
	},
});

const emit = defineEmits(['close']);

function closeDialog() {
	emit('close');
}
</script>
