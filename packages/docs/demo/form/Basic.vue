<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ErMessage } from "weizui-ui";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});

const options = ref([
  { value: "beijing", label: "Zone One" },
  { value: "shanghai", label: "Zone Two" },
]);

const onSubmit = () => {
  ErMessage.success("submit!");
};
</script>

<template>
  <wz-form :model="form">
    <wz-form-item label="Activity name">
      <wz-input v-model="form.name" />
    </wz-form-item>
    <wz-form-item label="Activity zone">
      <wz-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </wz-form-item>
    <wz-form-item label="Instant delivery">
      <wz-switch v-model="form.delivery" />
    </wz-form-item>
    <wz-form-item label="Activity form">
      <wz-input v-model="form.desc" type="textarea" />
    </wz-form-item>
    <wz-form-item>
      <wz-button type="primary" @click="onSubmit">Create</wz-button>
      <wz-button>Cancel</wz-button>
    </wz-form-item>
  </wz-form>
</template>
