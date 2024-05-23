// 引入 Vue 中的 App 和 Plugin 类型
import type { App, Plugin } from "vue";
// 引入 lodash 的 each 函数用于遍历
import { each } from "lodash-es";

// 定义一个类型 SFCWithInstall，它是一个类型 T 和 Plugin 的联合类型
type SFCWithInstall<T> = T & Plugin;

// 定义一个函数 makeInstaller，接受一个 Plugin 类型数组，返回一个安装函数
export function makeInstaller(components: Plugin[]) {
  // 定义一个安装函数，接受一个 Vue 应用实例
  const install = (app: App) =>
    // 使用 lodash 的 each 函数遍历所有组件，并在传入的 app 上使用它们
    each(components, (c) => {
      app.use(c);
    });

  // 返回这个安装函数
  return install;
}

// 定义一个助手函数 withInstall，用于添加 install 方法到组件
export const withInstall = <T>(component: T) => {
  // 将组件强制转换为 SFCWithInstall 类型，并添加 install 方法
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件名称，如果没有定义则使用 "UnnamedComponent"
    const name = (component as any)?.name || "UnnamedComponent";
    // 在 app 上注册该组件
    app.component(name, component as SFCWithInstall<T>);
  };
  // 返回强制转换后的组件
  return component as SFCWithInstall<T>;
};

/* 
makeInstaller 函数：
用于创建一个安装器，这个安装器可以接受一个由 Vue 插件组成的数组。
安装器函数接收一个 Vue 应用实例，遍历插件数组，并在该实例上安装每个插件。
这样可以方便地将多个插件一次性安装到 Vue 应用中。
withInstall 助手函数：
用于扩展任何组件，使其具备作为 Vue 插件的能力。
通过添加一个 install 方法到组件对象，该方法在调用时会将组件注册到 Vue 应用中。
组件注册时如果没有显式定义名称，则会使用默认名称 "UnnamedComponent"。

*/