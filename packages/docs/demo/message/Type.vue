<script lang="ts" setup>
// import { ErMessage } from "weizui-ui";

const open1 = () => {
  // ErMessage("This is a message.");
  alert("This is a message.")

};
const open2 = () => {
  // ErMessage({
  //   message: "Congrats, this is a success message.",
  //   type: "success",
  // });
  alert("This is a message.")

};
const open3 = () => {
  // ErMessage({
  //   message: "Warning, this is a warning message.",
  //   type: "warning",
  // });
  alert("This is a message.")

};
const open4 = () => {
  // ErMessage.error("Oops, this is a error message.");
  alert("This is a message.")

};
</script>

<template>
  <wz-button :plain="true" @click="open2">Success</wz-button>
  <wz-button :plain="true" @click="open3">Warning</wz-button>
  <wz-button :plain="true" @click="open1">Message</wz-button>
  <wz-button :plain="true" @click="open4">Error</wz-button>
</template>
