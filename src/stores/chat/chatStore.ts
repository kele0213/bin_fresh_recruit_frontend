import {defineStore} from 'pinia'
import {ref} from 'vue'
import {
    GetChatListHttp,
    comStartChatHttp,
    comGetLatelyFreshHttp,
    freshGetLatelyComHttp,
    freshStartChatHttp, addChatByPictureByComHttp, addChatByPictureByFreshHttp
} from '@/service/chat/chat'
import {getUserInfoHttp} from '@/service/fresh/request'
import type {
    ComStartChatRequest,
    FreshGetChatRequest,
    FreshStartChatRequest
} from '@/service/chat/type'
import type {GetChatRequest} from '@/service/chat/type'
import type {ChatVo} from '@/service/chat/type'
import {getCompanyInfo} from '@/service/company/companyInfo'
import localCache from '@/utils/localCache'
import {showMsg} from "@/utils/message";

export const useChatStore = defineStore('chatStore', () => {
    // 企业获取最近聊天对象
    const latelyFresh = ref()
    const getLatelyFreshList = async () => {
        const res = await comGetLatelyFreshHttp()
        if (res.code === 0) {
            latelyFresh.value = res.data
        }
    }
    // 应届生获取最近聊天对象
    const latelyCom = ref()
    const getLatelyComList = async () => {
        const res = await freshGetLatelyComHttp()
        if (res.code === 0) {
            latelyCom.value = res.data
        }
    }

    // 获取聊天记录
    const chatList = ref<ChatVo[]>()
    // 获取聊天记录
    const getChatList = async (data: GetChatRequest) => {
        const res = await GetChatListHttp(data)
        if (res.code === 0) {
            chatList.value = res.data
        }
    }

    // 点击选择应届生
    const freshId = ref()
    const freshInfo = ref()
    const changFreshId = async (data: string) => {
        freshId.value = data
        const res = await getUserInfoHttp({
            user_id: data
        })
        if (res.code === 0) {
            freshInfo.value = res.data
            if (freshInfo.value.user_sex === 0) {
                freshInfo.value.user_sex = '男'
            } else {
                freshInfo.value.user_sex = '女'
            }
        }
        // 加载聊天记录
        await getChatList({
            user_id: data,
            com_id: localCache.getCache('userId')
        })
    }

    // 点击选择企业
    const comId = ref()
    const comInfo = ref()
    const changeComId = async (data: string) => {
        comId.value = data
        const res = await getCompanyInfo({
            com_id: data
        })
        if (res.code === 0) {
            comInfo.value = res.data
        }
        await getChatList({
            com_id: data,
            user_id: localCache.getCache('userId')
        })
    }

    // 企业发起聊天
    const comSend = async (data: ComStartChatRequest) => {
        const res = await comStartChatHttp(data)
        if (res.code === 0) {
            await getChatList({
                user_id: data.user_id,
                com_id: localCache.getCache('userId')
            })
        }
    }
    // 应届生发起聊天
    const freshSend = async (data: FreshStartChatRequest) => {
        const res = await freshStartChatHttp(data)
        if (res.code === 0) {
            await getChatList({
                user_id: localCache.getCache('userId'),
                com_id: data.com_id
            })
        }
    }

    // 企业发送图片
    const comSendByPicture = async (data: FormData) => {
        const res = await addChatByPictureByComHttp(data)
        if (res.code === 0) {
            await getChatList(<GetChatRequest>{
                user_id: data.get("user_id"),
                com_id: localCache.getCache('userId')
            })
        } else {
            showMsg("发送图片失败，请重试", "error")
        }
    }
    // 应届生发送图片
    const freshSendByPicture = async (data: FormData) => {
        const res = await addChatByPictureByFreshHttp(data)
        if (res.code === 0) {
            await getChatList(<GetChatRequest>{
                user_id: localCache.getCache('userId'),
                com_id: data.get("com_id")
            })
        } else {
            showMsg("发送图片失败，请重试", "error")
        }
    }
    return {
        latelyFresh,
        getLatelyFreshList,
        changFreshId,
        freshInfo,
        comSend,
        chatList,
        getChatList,
        latelyCom,
        getLatelyComList,
        changeComId,
        comInfo,
        freshSend,comSendByPicture,freshSendByPicture
    }
})
