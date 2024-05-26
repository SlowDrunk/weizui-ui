<script setup lang="ts">
// import { ErMessageBox, ErMessage } from "weizui-ui";

function openConfirm() {
	// ErMessageBox.prompt("Place input your name", "Tip", { type: "info" })
	//   .then(({ value }) => {
	//     ErMessage.info(`your name is: ${value}`);
	//   })
	//   .catch((action) => {
	//     ErMessage.warning(`action: ${action}`);
	//   });
	alert("This is a message.");
}
</script>

<template>
	<wz-button @click="openConfirm" plain> Click to open the Confirm</wz-button>
</template>
