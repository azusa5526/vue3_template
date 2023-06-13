<template>
	<svg aria-hidden="true">
		<use :href="symbolId" :fill="color" />
	</svg>
</template>

<script lang="ts">
import { defineComponent, computed, isRef } from 'vue';
import type { PropType, Ref } from 'vue';

export default defineComponent({
	name: 'svg-icon',
	props: {
		prefix: {
			type: String,
			default: 'icon',
		},
		use: {
			type: String as PropType<string | Ref<string>>,
			required: true,
		},
		color: {
			type: String,
			default: 'currentColor',
		},
	},
	setup(props) {
		const symbolId = computed(() => {
			return `#${props.prefix}-${isRef(props.use) ? props.use.value : props.use}`;
		});
		return { symbolId };
	},
});
</script>
