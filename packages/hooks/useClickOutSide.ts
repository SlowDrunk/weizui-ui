import { type Ref } from 'vue'
import useEventListener from './useEventListener'

export default function useClickOutSide(elementRef: Ref<HTMLElement | void>, callback: (e: MouseEvent) => void) {
    useEventListener(document, 'click', (e: Event) => {
        if (elementRef.value && e.target) {
            if (!elementRef.value.contains(e.target as HTMLElement)) {
                // 判断点击区域是否在ref元素内
                callback(e as MouseEvent)
            }
        }
    })
}