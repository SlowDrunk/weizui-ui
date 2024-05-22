import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue"
import { withInstall } from "@weizui-ui/utils";

export const WzDropDown = withInstall(Dropdown)
export const WzDropDownItem = withInstall(DropdownItem)

export * from './types'