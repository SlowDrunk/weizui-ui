import type { Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info"
export type NativeType = "button" | "submit" | "reset"
export type ButtonSize = "large" | "default" | "small"

export interface ButtonProps {
    tag?: string;
    // 按钮类型
    type?: ButtonType;
    // 按钮大小
    size?: ButtonSize;
    // 按钮原生类型
    nativeType?: NativeType;
    // 按钮是否禁用
    disabled?: boolean;
    // 按钮是否加载中
    loading?: boolean;
    loadingIcon?: string;
    // 按钮是否圆角
    round?: boolean;
    // 按钮是否圆形
    circle?: boolean;
    // 按钮图标
    icon?: string;
    // 按钮是否朴素
    plain?: boolean;
    autofocus?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;
}

export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

export interface ButtonEmits {
    (e: 'click', value: MouseEvent): void;
}

export interface ButtonInstance {
    ref: Ref<HTMLElement | void>
}
