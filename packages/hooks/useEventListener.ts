import { onMounted, onBeforeMount, watch, isRef, unref, type MaybeRef } from 'vue'

export default function useEventListener(target: MaybeRef<EventTarget | HTMLElement>, event: string, handler: (e: Event) => any) {
    if (isRef(target)) {
        watch(target, (val, oldVal) => {
            oldVal?.removeEventListener(event, handler)
            val?.addEventListener(event, handler)
        })
    } else {
        onMounted(() => target.addEventListener(event, handler))
    }
    onBeforeMount(() => unref(target).removeEventListener(event, handler))
}