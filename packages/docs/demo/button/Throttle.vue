<script setup>
// import { ErMessage } from "weizui-ui";
function handleBtnClick() {
  // ErMessage.info("btn click");
  console.log("btn click");
}
</script>

<template>
  <p>
    <wz-button @click="handleBtnClick"> with throttle</wz-button>
    <wz-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</wz-button
    >
  </p>
</template>
