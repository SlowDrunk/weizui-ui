<script lang="ts" setup>
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { computed, inject, ref } from "vue";
import { throttle } from "lodash-es";
import { BUTTON_GROUP_CTX_KEY } from "./cantext";
import WzIcon from "../Icon/Icon.vue";

defineOptions({
	name: "WzButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
	tag: "button",
	nativeType: "button",
});
const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0);

const emit = defineEmits<ButtonEmits>();

const size = computed(() => buttonGroupCtx?.size ?? props.size ?? "");
const type = computed(() => buttonGroupCtx?.type ?? props.type ?? "");
const disabled = computed(
	() => props.disabled || buttonGroupCtx?.disabled || false
);

const handleClick = (e: MouseEvent) => emit("click", e);
const handleClickWithThrottle = () =>
	throttle(handleClick, props.throttleDuration, { trailing: false });

const slots = defineSlots();

const iconStyle = computed(() => ({
	marginRight: slots.default ? "6px" : "0px",
}));

const _ref = ref<HTMLElement>();

defineExpose<ButtonInstance>({
	ref: _ref,
});
</script>

<template>
	<component
		:is="props.tag"
		class="wz-button"
		ref="_ref"
		:type="props.tag === 'button' ? nativeType : void 0"
		:class="{
			[`wz-button--${type}`]: type,
			[`wz-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
		}"
		:autofocus="autofocus"
		:disabled="disabled || loading ? true : void 0"
		@click="
			(e: MouseEvent) =>
				useThrottle ? handleClickWithThrottle() : handleClick(e)
		"
	>
		<template v-if="loading">
			<slot name="loading">
				<wz-icon
					:style="iconStyle"
					class="loading-icon"
					:icon="loadingIcon ?? 'spinner'"
					spin
				></wz-icon>
			</slot>
		</template>
		<wz-icon
			v-if="icon || !loading"
			:icon="icon || ''"
			size="1x"
			:style="iconStyle"
		></wz-icon>
		<slot></slot>
	</component>
</template>

<style>
@import url("./styles.css");
</style>
