<script setup>
import { ErMessage } from "weizui-ui";

function handleClose() {
  // ErMessage.info("close callback");
  console.log("close callback");
}
</script>
<template>
  <div class="basic block">
    <wz-alert title="Unclosable alert" type="success" :closable="false" />
    <wz-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
