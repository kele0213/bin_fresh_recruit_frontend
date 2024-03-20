import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {
  AddMessageRequest,
  MessageListRequest,
  DeleteMessageRequest,
  UpdateMessageRequest
} from '@/service/school/type'
import { addMessage, deleteMessage, listMessage, updateMessage } from '@/service/school/message'
import { showMsg } from '@/utils/message'

export const useMessageStore = defineStore('message', () => {
  const messageList = ref()
  const count = ref(100)
  const pageSize = ref(100)
  const reqData = ref<MessageListRequest>({
    current: 1,
    page_size: 3,
    search_content: ''
  })
  // 修改分页数据
  const changeCurrent = (current: number) => {
    reqData.value.current = current
  }
  //修改reqData
  const changeReqData = async (value: string) => {
    reqData.value.search_content = value
  }
  // 获取message列表
  const getMessageList = async () => {
    const res = await listMessage(reqData.value)
    if (res.code === 0) {
      messageList.value = res.data.list
      count.value = res.data.total
      pageSize.value = res.data.page_size
    }
  }
  // 添加message数据
  const addMessageInfo = async (data: AddMessageRequest) => {
    const res = await addMessage(data)
    if (res.code === 0) {
      showMsg('添加成功', 'success')
      await getMessageList()
    } else {
      showMsg('添加失败，数据不能为空', 'error')
    }
  }

  // 修改message数据
  const updateMessageData = async (data: UpdateMessageRequest) => {
    const res = await updateMessage(data)
    if (res.code === 0) {
      showMsg('修改成功', 'success')
      await getMessageList()
    } else {
      showMsg('修改失败，数据不能为空', 'error')
    }
  }

  // 删除message数据
  const deleteMessageData = async (data: DeleteMessageRequest) => {
    const res = await deleteMessage(data)
    if (res.code === 0) {
      showMsg('删除成功', 'success')
      await getMessageList()
    } else {
      showMsg('删除失败', 'error')
    }
  }

  return {
    reqData,
    messageList,
    count,
    getMessageList,
    changeCurrent,
    addMessageInfo,
    changeReqData,
    deleteMessageData,
    updateMessageData,
    pageSize
  }
})
