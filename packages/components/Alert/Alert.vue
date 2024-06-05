<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";
import type { AlertProps, AlertEmits, AlertInstance } from "./types.ts";
import { typeIconMap } from "@weizui-ui/utils";
defineOptions({
	name: "WzAlert",
});
const props = withDefaults(defineProps<AlertProps>(), {
	effect: "light",
	type: "info",
	closable: true,
});

const emits = defineEmits<AlertEmits>();
const slots = useSlots();

const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info");
const withDescription = computed(() => props.description || slots.default);

const open = () => {
	visible.value = true;
};

const close = () => {
	visible.value = false;
	emits("close");
};

defineExpose<AlertInstance>({
	open,
	close,
});
</script>

<template>
	<transition name="wz-alert-fade">
		<div
			v-show="visible"
			class="wz-alert"
			role="alert"
			:class="{
				[`wz-alert__${type}`]: type,
				[`wz-alert__${effect}`]: effect,
				'text-center': center,
			}"
		>
			<wz-icon
				v-if="showIcon"
				class="wz-alert__icon"
				:class="{ 'big-icon': withDescription }"
				:icon="iconName"
			/>
			<div class="wz-alert__content">
				<span
					class="wz-alert__title"
					:class="{ 'with-desc': withDescription }"
					:style="{
						display: center && !showIcon ? 'flow' : 'inline',
					}"
				>
					<slot name="title">{{ title }}</slot>
				</span>
				<p class="wz-alert__description">
					<slot>{{ description }}</slot>
				</p>
				<div class="wz-alert__close" v-if="closable">
					<wz-icon @click.stop="close" icon="xmark" />
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped>
@import "./style.css";
</style>
