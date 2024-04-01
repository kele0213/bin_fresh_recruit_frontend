// 投递
import { defineStore } from 'pinia'
import { freshSendResumeHttp, getFreshSendStatusListHttp } from '@/service/fresh/request'
import { showBox, showMsg } from '@/utils/message'
import type { FreshSendStatusListRequest } from '@/service/fresh/type'
import { ref } from 'vue'

export const useSendStore = defineStore('freshSend', () => {
  // 投递简历
  const sendResume = async (data: any) => {
    const res = await freshSendResumeHttp({
      com_id: data.com_id,
      job_id: data.job_id,
      resume_id: data.resume_id
    })
    if (res.code === 0) {
      showMsg('投递成功，请前往个人中心查看进度', 'success')
    } else if (res.code === 4019) {
      showBox('投递失败', '投递进度在流程中，请勿重复投递')
    } else {
      showMsg('投递失败，请重试', 'error')
    }
  }

  // 投递记录
  const stateReq = ref<FreshSendStatusListRequest>({
    current: 1,
    page_size: 4
  })
  const stateListPage = ref()
  const total = ref()
  const pageSize = ref()
  const current = ref()
  const getStateList = async () => {
    const res = await getFreshSendStatusListHttp(stateReq.value)
    if (res.code === 0) {
      total.value = res.data.total
      pageSize.value = res.data.page_size
      stateListPage.value = res.data.list
      current.value = res.data.current
    }
  }

  const changeCurrent = async (data: number) => {
    stateReq.value.current = data
  }
  return { sendResume, stateListPage, total, pageSize, getStateList, changeCurrent, current }
})
