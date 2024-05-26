<script setup lang="ts">
// import { ErMessageBox, ErMessage } from "weizui-ui";

function openConfirm() {
  // ErMessageBox.confirm("proxy will permanently delete the file. Continue?", "Warning", { type: "warning" })
  //   .then((action) => {
  //     ErMessage.info(`action: ${action}`);
  //   })
  //   .catch((action) => {
  //     ErMessage.warning(`action: ${action}`);
  //   });
  alert("This is a message.")

}
</script>

<template>
  <wz-button @click="openConfirm" plain> Click to open the Confirm</wz-button>
</template>
