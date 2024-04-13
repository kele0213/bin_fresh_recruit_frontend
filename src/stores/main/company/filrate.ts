import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FreshSendListAllRequest, FreshSendListRequest } from '@/service/company/type'
import { filrateResume, freshSendAllList, freshSendList } from '@/service/company/jobInfo'
import type { FilrateRequest } from '@/service/company/type'
import { showMsg } from '@/utils/message'

export const useFilrateStore = defineStore('filrate', () => {
  const sendList = ref()
  const count = ref(100)
  const pageSize = ref(100)
  const reqData = ref<FreshSendListRequest>({
    current: 1,
    page_size: 8,
    send_status: -1,
    job_name: ''
  })
  const reqDataAll = ref<FreshSendListAllRequest>({
    current: 1,
    page_size: 8,
    send_status: -1
  })
  // 查询投递记录列表
  const getSendList = async () => {
    let res
    if (reqData.value.job_name != '') {
      res = await freshSendList(reqData.value)
    } else {
      res = await freshSendAllList(reqDataAll.value)
    }
    if (res.code === 0) {
      sendList.value = res.data.list
      count.value = res.data.total
      pageSize.value = res.data.page_size
    }
  }
  // 改变搜索条件
  const changeSearchData = async (data: any) => {
    reqData.value.job_name = data['job_name']
    if (data['send_status'] !== '') {
      reqData.value.send_status = data['send_status']
      reqDataAll.value.send_status = data['send_status']
    } else {
      reqData.value.send_status = -1
      reqDataAll.value.send_status = -1
    }
  }
  // 修改分页数据
  const changeCurrent = (current: number) => {
    reqData.value.current = current
    reqDataAll.value.current = current
  }
  // 简历筛选
  const updateSendStatus = async (data: FilrateRequest) => {
    const res = await filrateResume(data)
    if (res.code === 0) {
      await getSendList()
      showMsg('更新状态成功', 'success')
    } else {
      showMsg('更新状态失败', 'error')
    }
  }
  return {
    sendList,
    count,
    pageSize,
    reqData,
    getSendList,
    changeSearchData,
    changeCurrent,
    updateSendStatus
  }
})
