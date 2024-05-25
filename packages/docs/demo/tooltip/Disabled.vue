<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <wz-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <wz-button @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</wz-button
    >
  </wz-tooltip>
</template>
