<script lang="ts" setup>
import { reactive, ref } from "vue";
// import { ErMessage, type FormInstance } from "weizui-ui";

const formRef = ref<any>();
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

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
});

const onSubmit = () => {
  formRef.value?.validate().then((valid:any) => {
    if (valid) {
      // ErMessage.success("submit!");
      alert('submit')
    }
  });
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <wz-form ref="formRef" :model="form" :rules="rules">
    <wz-form-item label="Activity name" prop="name">
      <wz-input v-model="form.name" />
    </wz-form-item>
    <wz-form-item label="Activity zone" prop="region">
      <wz-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </wz-form-item>
    <wz-form-item label="Instant delivery" prop="delivery">
      <wz-switch v-model="form.delivery" />
    </wz-form-item>
    <wz-form-item label="Activity form" prop="desc">
      <wz-input v-model="form.desc" type="textarea" />
    </wz-form-item>
    <wz-form-item>
      <wz-button type="primary" @click="onSubmit">Create</wz-button>
      <wz-button @click="onReset">Reset</wz-button>
    </wz-form-item>
  </wz-form>
</template>
