<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <wz-alert type="success">Success alert</wz-alert>
    <wz-alert type="info">Info alert</wz-alert>
    <wz-alert type="warning">Warning alert</wz-alert>
    <wz-alert type="danger">Error alert</wz-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <wz-alert type="success" title="Success alert" />
    <wz-alert type="info" title="Info alert" />
    <wz-alert type="warning" title="Warning alert" />
    <wz-alert type="danger" title="Error alert" />
  </div>
</template>
