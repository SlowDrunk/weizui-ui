<script setup lang="ts">
import { ErMessage, ErMessageBox } from "weizui-ui";

function openMsgBox() {
  ErMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      type: "warning",
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action) {
        if (action === "confirm") {
          ErMessage.info(action);
        } else {
          ErMessage.warning(action as string);
        }
      },
    }
  );
}
</script>

<template>
  <wz-button @click="openMsgBox" plain>Click to open Message Box</wz-button>
</template>
