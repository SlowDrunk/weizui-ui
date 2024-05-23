<script lang="ts" setup>
import { ref, provide, watch } from "vue";
import { each } from "lodash-es";
import type {
	CollapseContext,
	CollapseEmits,
	CollapseItemName,
	CollapseProps,
} from "./types";
import { debugWarn } from "@weizui-ui/utils";
import { COLLAPSE_CTX_KEY } from "./constants";

const COMPONENT_NAME = "WzCollapse" as const;

defineOptions({
	name: COMPONENT_NAME,
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref<CollapseItemName[]>(props.modelValue);

watch(
	() => props.modelValue,
	(val) => (activeNames.value = val)
);

if (props.accordion && activeNames.value.length > 1) {
	debugWarn(COMPONENT_NAME, "accordion模式下只允许同时展开一个面板");
}

function updateActiveNames(val: CollapseItemName[]) {
	activeNames.value = val;
	each(["update:modelValue", "change"], (e) =>
		emits(e as "update:modelValue" & "change", val)
	);
}

function handleItemClick(item: CollapseItemName) {
	let _activeNames = [...activeNames.value];
	// 手风琴模式
	if (props.accordion) {
		_activeNames = [activeNames.value[0] === item ? "" : item];
		updateActiveNames(_activeNames);
		return;
	}
	// 非手风琴模式
	const index = _activeNames.indexOf(item);
	if (index > -1) {
		_activeNames.splice(index, 1);
	} else {
		_activeNames.push(item);
	}
	updateActiveNames(_activeNames);
}

provide<CollapseContext>(COLLAPSE_CTX_KEY, {
	activeNames,
	handleItemClick,
});
</script>

<template>
	<div class="wz-collapse">
		<slot></slot>
	</div>
</template>

<style scoped>
@import "./style.css";
</style>
