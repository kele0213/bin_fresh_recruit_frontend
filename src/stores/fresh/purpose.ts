// 岗位意向
import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  addJobPurposeHttp,
  deleteJobPurposeHttp,
  getJobPurposeListHttp
} from '@/service/fresh/request'
import type { AddJobPurposeRequest } from '@/service/fresh/type'
import { showBox, showMsg } from '@/utils/message'
import type { JobPurposeInfo } from '@/service/fresh/type'

export const usePurposeStore = defineStore('freshPurpose', () => {
  // 获取岗位意向列表
  const purposeList = ref<JobPurposeInfo>()
  const getPurposeList = async () => {
    const res = await getJobPurposeListHttp()
    if (res.code === 0) {
      purposeList.value = res.data
    }
  }
  // 新增岗位意向
  const addPurpose = async (data: AddJobPurposeRequest) => {
    const res = await addJobPurposeHttp(data)
    if (res.code === 0) {
      showMsg('添加成功', 'success')
    } else if (res.code === 4022) {
      showBox('添加失败', '意向岗位最大仅支持4个')
    } else {
      showMsg('添加失败，请重试', 'error')
    }
    await getPurposeList()
  }
  // 删除岗位意向
  const deletePurpose = async (id: number) => {
    const res = await deleteJobPurposeHttp({
      id
    })
    if (res.code === 0) {
      showMsg('删除成功', 'success')
    } else {
      showMsg('删除失败，请重试', 'error')
    }
    await getPurposeList()
  }
  return { purposeList, getPurposeList, addPurpose, deletePurpose }
})
