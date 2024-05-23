// 定义一个设置元素高度为零的函数
const _setHeightZero = (el: HTMLElement) => (el.style.height = 'opx')
// 定义一个设置元素高度为其滚动高度的函数
const _setHeightScroll = (el: HTMLElement) => (el.style.height = `${el.scrollHeight}`)
// 清空元素高度
const _setHeightEmpty = (el: HTMLElement) => (el.style.height = '')
// 设置元素溢出
const _setOverFlowHidden = (el: HTMLElement) => (el.style.overflow = 'hidden')
// 清除元素溢出效果
const _setOverFlowEmpty = (el: HTMLElement) => (el.style.overflow = '')

// 定义一个记录不同状态下的事件处理函数
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    beforeEnter: (el) => {
        _setHeightZero(el)
        _setOverFlowEmpty(el)
    },
    beforeLeave: (el) => {
        _setHeightScroll(el)
        _setOverFlowHidden(el)
    },
    leave: (el) => _setHeightZero(el),
    afterLeave: (el) => {
        _setHeightEmpty(el)
        _setOverFlowEmpty(el)
    }
}

export default transitionEvents