export interface ComStartChatRequest {
  user_id: string
  content: string
}

export interface ChatVo {
  id: number
  user_id: string
  com_id: string
  user_type: number
  chat_content: string
  create_time: string
  a_avatar: string
}

export interface FreshStartChatRequest {
  com_id: string
  content: string
}

export interface GetChatRequest {
  user_id: string
  com_id: string
}

export interface FreshGetChatRequest {
  com_id: string
}

export interface GetLatelyFreshVo {
  user_id: string
  com_id: string
  user_name: string
  a_avatar: string
  user_type: number
  create_time: string
  com_name: string
}
