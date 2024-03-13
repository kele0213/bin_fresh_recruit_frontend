export interface ItableConfig {
  isShowIndex?: boolean
  isShowSelect?: boolean
  title?: string
  propList: IpropList[]
}

export interface IpropList {
  field?: string
  label: string
  minWidth?: string
  slotName?: string
  width?: string
}
