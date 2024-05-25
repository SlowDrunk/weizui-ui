<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ErMessage, type FormInstance } from "weizui-ui";

const formRef = ref<FormInstance>();
const form = reactive({
  name: "",
  password: "",
  passwordConfirm: "",
});

const rules: any = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
  passwordConfirm: [
    {
      required: true,
      trigger: "blur",
      message: "请再次输入密码",
    },
    {
      validator: (_: typeof rules, value: string) => value === form.password,
      trigger: "blur",
      message: "两个密码必须相同",
    },
  ],
});

const onSubmit = async (instance?: FormInstance) => {
  const valid = await instance?.validate();
  if (!valid) return;
  ErMessage.success("submit!");
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <wz-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-position="top"
    @submit.prevent="onSubmit(formRef)"
  >
    <wz-form-item label="Activity name" prop="name">
      <wz-input v-model="form.name" />
    </wz-form-item>
    <wz-form-item label="Password" prop="password">
      <wz-input v-model="form.password" type="password" />
    </wz-form-item>
    <wz-form-item label="Password Confirm" prop="passwordConfirm">
      <wz-input v-model="form.passwordConfirm" type="password" />
    </wz-form-item>
    <wz-form-item>
      <wz-button type="primary" native-type="submit">Create</wz-button>
      <wz-button @click="onReset">Reset</wz-button>
    </wz-form-item>
  </wz-form>
</template>
