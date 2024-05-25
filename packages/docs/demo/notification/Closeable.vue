<script lang="ts" setup>
import {ErNotification} from 'weizui-ui'

const open = () => {
  ErNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

<template>
  <wz-button plain @click="open"> Hide close button </wz-button>
</template>