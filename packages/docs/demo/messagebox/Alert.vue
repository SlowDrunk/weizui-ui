<script setup lang="ts">
// import { ErMessageBox, ErMessage } from "weizui-ui";

function openAlert() {
	// ErMessageBox.alert("This is a message", "Title")
	//   .then((action) => {
	//     ErMessage.info(`action: ${action}`);
	//   })
	//   .catch((action) => {
	//     ErMessage.warning(`action: ${action}`);
	//   });
	alert("This is a message.");
}
</script>

<template>
	<wz-button @click="openAlert" plain> Click to open the Alert</wz-button>
</template>
