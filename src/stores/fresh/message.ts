// 资讯
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMessageListByFreshHttp } from '@/service/fresh/request'
import type { MessageVo } from '@/service/fresh/type'

export const useMessageStore = defineStore('freshMessage', () => {
  // 分页获取资讯列表
  const messageList = ref<MessageVo[]>()
  const total = ref()
  const pageSize = ref()
  const current = ref()
  const pageReq = ref({
    current: 1,
    page_size: 10
  })

  const getMessageList = async () => {
    const res = await getMessageListByFreshHttp(pageReq.value)
    if (res.code === 0) {
      messageList.value = res.data.list
      total.value = res.data.total
      pageSize.value = res.data.page_size
      current.value = res.data.current
    }
  }
  const changeCurrent = async (current: number) => {
    pageReq.value.current = current
  }

  return { getMessageList, changeCurrent, total, pageSize, current, messageList }
})
