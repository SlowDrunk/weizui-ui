import { makeInstaller } from "@weizui-ui/utils";
import components from "./components";
import '@weizui-ui/theme/index.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const installer = makeInstaller(components);

export * from "@weizui-ui/components";
export default installer;