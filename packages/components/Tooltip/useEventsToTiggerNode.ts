import { each, isElement } from "lodash-es";
import { onMounted, onUnmounted, watch } from "vue";
import type { ComputedRef, Ref, WatchStopHandle } from "vue";
import type { TooltipProps } from "./types";

export function useEvenstToTiggerNode(
  props: TooltipProps & { virtualTriggering?: boolean },
  triggerNode: ComputedRef<HTMLElement | undefined>,
  events: Ref<Record<string, EventListener>>,
  closeMethod: () => void
) {
  // 用于在组件卸载时停止观察者的句柄
  let watchEventsStopHandle: WatchStopHandle | void;
  let watchTriggerNodeStopHandle: WatchStopHandle | void;

  // 用于快速访问和移除事件处理器的映射表
  const _eventHandleMap = new Map();

  // 绑定事件到触发节点的函数
  const _bindEventToVirtualTiggerNode = () => {
    const el = triggerNode.value;
    // 检查元素是否是有效的DOM元素
    isElement(el) &&
      each(events.value, (fn, event) => {
        _eventHandleMap.set(event, fn);
        el?.addEventListener(event as keyof HTMLElementEventMap, fn);
      });
  };

  // 从触发节点解绑指定事件的函数
  const _unbindEventToVirtualTiggerNode = () => {
    const el = triggerNode.value;
    // 检查元素是否是有效的DOM元素
    isElement(el) &&
      each(
        ["mouseenter", "click", "contextmenu"],
        (key) =>
          _eventHandleMap.has(key) &&
          el?.removeEventListener(key, _eventHandleMap.get(key))
      );
  };

  // 设置观察者和生命周期钩子
  onMounted(() => {
    // 观察触发节点的变化，并在虚拟触发启用时绑定事件
    watchTriggerNodeStopHandle = watch(
      triggerNode,
      () => props.virtualTriggering && _bindEventToVirtualTiggerNode(),
      { immediate: true }
    );

    // 观察事件对象的变化，重新绑定事件并在必要时关闭提示框
    watchEventsStopHandle = watch(
      events,
      () => {
        if (!props.virtualTriggering) return;
        _unbindEventToVirtualTiggerNode();
        _bindEventToVirtualTiggerNode();
        closeMethod();
      },
      { deep: true }
    );
  });

  // 组件卸载时清理事件监听器和观察者，防止内存泄露
  onUnmounted(() => {
    watchTriggerNodeStopHandle?.();
    watchEventsStopHandle?.();
  });
}

export default useEvenstToTiggerNode;
