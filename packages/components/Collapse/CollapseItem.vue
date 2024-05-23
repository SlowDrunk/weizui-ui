<script lang="ts" setup>
import type { CollapseItemProps } from "./types";
import { inject, computed } from "vue";
import { COLLAPSE_CTX_KEY } from "./constants";
import transitionEvents from "./transitionEvents";
import WzIcon from "../Icon/Icon.vue";

defineOptions({
	name: "WzCollapseItem",
});

const props = defineProps<CollapseItemProps>();

const ctx = inject(COLLAPSE_CTX_KEY);

const isActive = computed(() =>
	ctx?.activeNames.value.includes(props.name as string)
);

const handleClick = () => {
	if (props.disabled) return;
	ctx?.handleItemClick(props.name as string);
};
</script>

<template>
	<div
		class="wz-collapse-item"
		:class="{
			'is-disabled': disabled,
		}"
	>
		<div
			class="wz-collapse-item__header"
			:id="`item-header-${name}`"
			:class="{
				'is-disabled': disabled,
				'is-active': isActive,
			}"
			@click="handleClick"
		>
			<span class="wz-collapse-item__title">
				<slot name="title">
					{{ title }}
				</slot>
			</span>
			<wz-icon icon="angle-right" class="header-angle" />
		</div>
		<transition name="slide" v-on="transitionEvents">
			<div class="wz-collapse-item__wapper" v-show="isActive">
				<div
					class="wz-collapse-item__content"
					:id="`item-content-${name}`"
				>
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<style scoped>
@import "./style.css";
</style>
