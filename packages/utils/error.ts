import { isString } from "lodash-es";
// 定义一个类
class WzUIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ErUIError";
    }
}

export function throwError(scope: string, msg: string) {
    throw new WzUIError(`[${scope}] ${msg}`);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
    if (process.env.NODE_ENV !== "production") {
        const err = isString(scope) ? new WzUIError(`[${scope}] ${msg}`) : scope;
        console.warn(err);
    }
}