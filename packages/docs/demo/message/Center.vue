<script lang="ts" setup>
import { ErMessage } from "weizui-ui";

const openCenter = () => {
  ErMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <wz-button plain @click="openCenter">Centered text</wz-button>
</template>
