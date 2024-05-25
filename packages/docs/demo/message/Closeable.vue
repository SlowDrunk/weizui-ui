<script lang="ts" setup>
import { ErMessage } from "weizui-ui";

const open1 = () => {
  ErMessage({
    showClose: true,
    message: "This is a message.",
  });
};
const open2 = () => {
  ErMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  ErMessage({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  ErMessage({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "danger",
  });
};
</script>

<template>
  <wz-button :plain="true" @click="open1">Message</wz-button>
  <wz-button :plain="true" @click="open2">Success</wz-button>
  <wz-button :plain="true" @click="open3">Warning</wz-button>
  <wz-button :plain="true" @click="open4">Error</wz-button>
</template>
