<script lang="ts" setup>
import { ErNotification } from "weizui-ui";

const open1 = () => {
  ErNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const open2 = () => {
  ErNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const open3 = () => {
  ErNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const open4 = () => {
  ErNotification({
    title: "Error",
    message: "This is an error message",
    type: "danger",
  });
};
</script>

<template>
  <wz-button plain @click="open1"> Success </wz-button>
  <wz-button plain @click="open2"> Warning </wz-button>
  <wz-button plain @click="open3"> Info </wz-button>
  <wz-button plain @click="open4"> Error </wz-button>
</template>
