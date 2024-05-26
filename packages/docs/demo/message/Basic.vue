<script lang="ts" setup>
import { h } from "vue";
// import { ErMessage } from "weizui-ui";

const open = () => {
  // ErMessage("This is a message.");
  alert("This is a message.")
};

const openVn = () => {
  // ErMessage({
  //   message: h("p", { style: "line-height: 1; font-size: 14px" }, [
  //     h("span", null, "Message can be "),
  //     h("i", { style: "color: teal" }, "VNode"),
  //   ]),
  // });
  alert("This is a message.")
};
</script>

<template>
  <wz-button :plain="true" @click="open">Show message</wz-button>
  <wz-button :plain="true" @click="openVn">VNode</wz-button>
</template>
