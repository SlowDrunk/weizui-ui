import { makeInstaller } from "@weizui-ui/utils";
import components from "./components";
import '@weizui-ui/theme/index.css'

const installer = makeInstaller(components);

export * from "@weizui-ui/components";
export default installer;