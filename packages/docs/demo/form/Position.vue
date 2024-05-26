<script lang="ts" setup>
import { reactive, ref } from "vue";
// import { ErMessage, type FormProps } from "weizui-ui";

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
const labelPosition = ref<any["labelPosition"]>("right");

const onSubmit = () => {
  // ErMessage.success("submit");
  alert('submit')
};
</script>

<template>
  <wz-button-group size="small">
    <wz-button
      @click="labelPosition = 'left'"
      :type="labelPosition === 'left' ? 'primary' : 'info'"
      >Left</wz-button
    >
    <wz-button
      @click="labelPosition = 'right'"
      :type="labelPosition === 'right' ? 'primary' : 'info'"
      >Right</wz-button
    >
    <wz-button
      @click="labelPosition = 'top'"
      :type="labelPosition === 'top' ? 'primary' : 'info'"
      >Top</wz-button
    >
  </wz-button-group>
  <div style="margin: 20px"></div>
  <wz-form :model="form" :label-position="labelPosition">
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
