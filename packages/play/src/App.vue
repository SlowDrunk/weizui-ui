<script setup lang="ts">
import type { DropdownItemProps } from "weizui-ui";

const items: DropdownItemProps[] = [
	{ command: "1", label: "Action 1" },
	{ command: "2", label: "Action 2" },
	{ command: "3", label: "Action 3", disabled: true },
	{ command: "4", label: "Action 4", divided: true },
];
</script>

<template>
	<wz-tooltip
		class="box-item"
		content="Top Left prompts info"
		placement="top-start"
	>
		<wz-button>top-start</wz-button>
	</wz-tooltip>
	<wz-dropdown>
		<span class="dropdown-link">
			Dropdown List
			<wz-icon icon="angle-down" />
		</span>
		<template #dropdown>
			<wz-dropdown-item command="1">Action 1</wz-dropdown-item>
			<wz-dropdown-item command="2" label="Action 2" />
			<wz-dropdown-item command="3" disabled>Action 3</wz-dropdown-item>
			<wz-dropdown-item command="4" divided>Action 4</wz-dropdown-item>
		</template>
	</wz-dropdown>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
