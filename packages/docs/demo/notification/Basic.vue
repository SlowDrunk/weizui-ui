<script setup lang="ts">
import { h } from "vue";
import { ErNotification } from "weizui-ui";

function openNotify1() {
  ErNotification({
    title: "Title",
    message: h("i", { style: "color:teal" }, "This is a remider"),
  });
}

function openNotify2() {
  ErNotification({
    title: "Prompt",
    message: "This is a message that does not auto close",
    duration: 0,
  });
}
</script>

<template>
  <wz-button @click="openNotify1" plain>Closes automatically</wz-button>
  <wz-button @click="openNotify2" plain>Won't closes automatically</wz-button>
</template>
