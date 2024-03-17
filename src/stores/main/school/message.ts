import {defineStore} from "pinia";
import {ref} from "vue";
import type {AddMessageRequest, MessageListRequest} from "@/service/school/type";
import {addMessage, listMessage} from "@/service/school/message";
import {showMsg} from "@/utils/message";

export const useMessageStore = defineStore('message', () => {
    const messageList = ref()
    const count = ref(100)
    const reqDate = ref<MessageListRequest>({
        current: 1,
        page_size: 10,
        search_content: ''
    })
    // 修改分页数据
    const changeCurrent = (current: number) => {
        reqDate.value.current = current
    }
    // 获取message列表
    const getMessageList = async () => {
        const res = await listMessage(reqDate.value)
        if (res.code === 0) {
            messageList.value = res.data.list
            count.value = res.data.total
        }
    }
    // 添加message数据
    const addMessageInfo = async (data:AddMessageRequest)=>{
        const res = await addMessage(data)
        if (res.code ===0){
            showMsg("添加成功","success")
            await getMessageList()
        }else {
            showMsg("添加失败","error")
        }
    }

    return {messageList,count,getMessageList,changeCurrent,addMessageInfo}
})