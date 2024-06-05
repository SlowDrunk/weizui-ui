<script setup lang="ts">
import { ref } from "vue";
import type { CollapseItemName } from "weizui-ui";
const activeNames = ref(["1"]);

function handleChange(val: CollapseItemName[]) {
	console.log(val);
}
</script>

<template>
	<!-- <wz-tooltip
		class="box-item"
		content="Top Left prompts info"
		placement="top-start"
	>
		<wz-button>top-start</wz-button>
	</wz-tooltip>
	<wz-dropdown>
		<a class="dropdown-link">
			Dropdown List
			<wz-icon icon="angle-down" />
		</a>
		<template #dropdown>
			<wz-dropdown-item command="1">Action 1</wz-dropdown-item>
			<wz-dropdown-item command="2" label="Action 2" />
			<wz-dropdown-item command="3" disabled>Action 3</wz-dropdown-item>
			<wz-dropdown-item command="4" divided>Action 4</wz-dropdown-item>
		</template>
	</wz-dropdown> -->
	<!-- <wz-collapse v-model="activeNames" @change="handleChange">
		<wz-collapse-item title="Consistency" name="1">
			<template #title>
				<span style="color: var(--wz-color-danger)"> Consistency </span>
				<wz-icon icon="question-circle" />
			</template>
			<div>
				Consistent with real life: in line with the process and logic of
				real life, and comply with languages and habits that the users
				are used to;
			</div>
			<div>
				Consistent within interface: all elements should be consistent,
				such as: design style, icons and texts, position of elements,
				etc.
			</div>
		</wz-collapse-item>
		<wz-collapse-item title="Feedback" name="2" disabled>
			<div>
				Operation feedback: enable the users to clearly perceive their
				operations by style updates and interactive effects;
			</div>
			<div>
				Visual feedback: reflect current state by updating or
				rearranging elements of the page.
			</div>
		</wz-collapse-item>
		<wz-collapse-item title="Efficiency" name="3">
			<div>
				Simplify the process: keep operating process simple and
				intuitive;
			</div>
			<div>
				Definite and clear: enunciate your intentions clearly so that
				the users can quickly understand and make decisions;
			</div>
			<div>
				Easy to identify: the interface should be straightforward, which
				helps the users to identify and frees them from memorizing and
				recalling.
			</div>
		</wz-collapse-item>
		<wz-collapse-item title="Controllability" name="4">
			<div>
				Decision making: giving advices about operations is acceptable,
				but do not make decisions for the users;
			</div>
			<div>
				Controlled consequences: users should be granted the freedom to
				operate, including canceling, aborting or terminating current
				operation.
			</div>
		</wz-collapse-item>
	</wz-collapse> -->
	<div style="max-width: 600px">
    <wz-alert type="success">Success alert</wz-alert>
    <wz-alert type="info">Info alert</wz-alert>
    <wz-alert type="warning">Warning alert</wz-alert>
    <wz-alert type="danger">Error alert</wz-alert>
  </div>
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
