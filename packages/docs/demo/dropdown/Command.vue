<script setup lang="ts">
import {
  type DropdownItemProps,
  // type DropdownCommand,
  // ErMessage,
} from "weizui-ui";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleCommand(command: any) {
  // ErMessage.info("click on item " + command);
  console.log("click on item " + command)
}
</script>

<template>
  <wz-dropdown :items="items" @command="handleCommand">
    <span class="dropdown-link">
      Dropdown List
      <wz-icon icon="angle-down" />
    </span>
  </wz-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--wz-color-primary);

  i {
    margin-left: 8px;
  }
}
</style>
