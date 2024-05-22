<script lang="ts" setup>
import { ref, computed, provide, useSlots } from "vue";
import { omit, isNil, assign, map } from "lodash-es";
import type {
	DropdownProps,
	DropdownEmits,
	DropdownInstance,
	DropdownItemProps,
	DropdownContext,
} from "./types";
import { DROPDOWN_CTX_KEY } from "./constants";
import { useId, useDisabledStyle } from "@weizui-ui/hooks";
import type { TooltipInstance } from "../Tooltip/types";
import { type ButtonInstance, WzButton, WzButtonGroup } from "../Button";
import DropdownItem from "./DropdownItem.vue";
import Tooltip from "../Tooltip/Tooltip.vue";

defineOptions({
	name: "WzDropdown",
	inheritAttrs: false,
});

const props = withDefaults(defineProps<DropdownProps>(), {
	hideOnClick: true,
	items: () => [] as DropdownItemProps[],
});
const emits = defineEmits<DropdownEmits>();
const slots = useSlots();

const tooltipRef = ref<TooltipInstance>();
const triggerRef = ref<ButtonInstance>();

const tooltipProps = computed(() => {
	omit(props, ["menuOptions", "hideAfterClick"]);
});
const _items = computed(() => {
	map(props.items, (item) => {
		assign(item, { command: item.command ?? useId().value });
	});
});

function handleItemClick(e: DropdownItemProps) {
	if (e.disabled) return;
	props.hideOnClick && tooltipRef.value?.hide();
	!isNil(e.command) && emits("command", e.command);
}
useDisabledStyle(slots, props.disabled);

defineExpose<DropdownInstance>({
	open: () => tooltipRef.value?.show(),
	close: () => tooltipRef.value?.hide(),
});

provide<DropdownContext>(DROPDOWN_CTX_KEY, {
	handleItemClick,
	size: computed(() => props.size),
});
</script>

<template>
	<div class="wz-dropdown" :class="{ 'is-disable': props.disabled }">
		<tooltip
			ref="tooltipRef"
			v-bind="tooltipProps"
			:virtual-triggering="splitButton"
			:virtual-ref="triggerRef"
			@visable-change="$emit('visible-change', $event)"
		>
			<wz-button-group
				:type="type"
				:size="size"
				:disabled="disabled"
				v-if="splitButton"
			>
				<wz-button @click="$emit('click', $event)">
					<slot name="default"></slot>
				</wz-button>
				<wz-button ref="triggerRef" icon="angle-down" />
			</wz-button-group>
			<slot v-else name="default"></slot>
			<template #content>
				<ul class="wz-dropdown__menu">
					<slot name="dropdown">
						<template v-for="item in _items" :key="item.command">
							<dropdown-item v-bind="item" />
						</template>
					</slot>
				</ul>
			</template>
		</tooltip>
	</div>
</template>

<style scoped>
@import url("./style.css");
</style>
