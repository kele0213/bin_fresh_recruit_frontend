import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'
import type { Action } from 'element-plus'

type types = EpPropMergeType<StringConstructor, 'success' | 'warning' | 'info' | 'error', unknown>

// 消息提示框
export function showMsg(
  message: string,
  type: types,
  showClose: boolean = false,
  duration: number = 3000
) {
  ElMessage({
    message,
    type,
    showClose,
    duration
  })
}

// 消息弹出框
export function showBox(
  title: string,
  message: string,
  callback?: (action: Action) => void,
  confirmBtn: string = '确定'
) {
  ElMessageBox.alert(message, title, {
    confirmButtonText: confirmBtn,
    callback
  })
}

// 通知框

export function showNotice(
  title: string,
  message: string,
  type: types,
  showClose: boolean = true,
  duration: number = 4500
) {
  ElNotification({
    title,
    message,
    type,
    showClose,
    duration
  })
}
