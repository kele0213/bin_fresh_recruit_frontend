// 企业发起聊天
import type { ComStartChatRequest } from '@/service/chat/type'
import httpService from '@/service'
import type { Idata } from '@/service/type'
import type {
  ChatVo,
  GetChatRequest,
  FreshGetChatRequest,
  FreshStartChatRequest,
  GetLatelyFreshVo
} from '@/service/chat/type'

export function comStartChatHttp(data: ComStartChatRequest) {
  return httpService.post<Idata<ChatVo>>({
    url: '/chat/com',
    data
  })
}

// 应届生发起聊天
export function freshStartChatHttp(data: FreshStartChatRequest) {
  return httpService.post<Idata<ChatVo>>({
    url: '/chat/fresh',
    data
  })
}

// 获取聊天记录
export function GetChatListHttp(data: GetChatRequest) {
  return httpService.get<Idata<ChatVo[]>>({
    url: '/chat/get/list',
    params: data,
    showLoading: false
  })
}

// 企业获取最近聊天对象
export function comGetLatelyFreshHttp() {
  return httpService.get<Idata<GetLatelyFreshVo[]>>({
    url: '/chat/lately/fresh'
  })
}

// 应届生获取最近聊天对象
export function freshGetLatelyComHttp() {
  return httpService.get<Idata<GetLatelyFreshVo[]>>({
    url: '/chat/lately/com'
  })
}
