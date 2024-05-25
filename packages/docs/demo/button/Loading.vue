<template>
  <div>
    <wz-button type="primary" loading>Loading</wz-button>
    <wz-button type="primary" loading-icon="circle-notch" loading
      >Loading</wz-button
    >
    <wz-button type="primary" loading>
      <template #loading>
        <wz-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </wz-button>
  </div>
</template>
