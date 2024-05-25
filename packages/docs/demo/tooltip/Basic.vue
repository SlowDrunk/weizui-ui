<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <wz-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <wz-button>top-start</wz-button>
      </wz-tooltip>
      <wz-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <wz-button>top</wz-button>
      </wz-tooltip>
      <wz-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <wz-button>top-end</wz-button>
      </wz-tooltip>
    </div>
    <div class="row">
      <wz-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <wz-button>left-start</wz-button>
      </wz-tooltip>
      <wz-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <wz-button>right-start</wz-button>
      </wz-tooltip>
    </div>
    <div class="row">
      <wz-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <wz-button class="mt-3 mb-3">left</wz-button>
      </wz-tooltip>
      <wz-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <wz-button>right</wz-button>
      </wz-tooltip>
    </div>
    <div class="row">
      <wz-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <wz-button>left-end</wz-button>
      </wz-tooltip>
      <wz-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <wz-button>right-end</wz-button>
      </wz-tooltip>
    </div>
    <div class="row center">
      <wz-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <wz-button>bottom-start</wz-button>
      </wz-tooltip>
      <wz-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <wz-button>bottom</wz-button>
      </wz-tooltip>
      <wz-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <wz-button>bottom-end</wz-button>
      </wz-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
