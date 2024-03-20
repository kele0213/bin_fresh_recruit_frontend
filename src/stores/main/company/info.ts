import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { InfoCompanyRequest } from '@/service/company/type'
import { getCompanyInfo, updateCompanyInfo } from '@/service/company/companyInfo'
import type { UpdateCompanyRequest } from '@/service/company/type'
import { showMsg } from '@/utils/message'

export const useInfoStore = defineStore('info', () => {
  const companyInfo = ref()
  // 获取企业信息
  const reqData = ref<InfoCompanyRequest>({
    com_id: ''
  })
  const getCompany = async () => {
    const res = await getCompanyInfo(reqData.value)
    if (res.code === 0) {
      companyInfo.value = res.data
    }
  }
  // 改变搜索
  const changeComId = async (data: any) => {
    reqData.value.com_id = data['com_id']
  }
  // 编辑
  const updateCom = async (data: UpdateCompanyRequest) => {
    const res = await updateCompanyInfo(data)
    if (res.code === 0) {
      showMsg('修改成功', 'success')
      await getCompany()
    } else {
      showMsg('修改失败', 'error')
    }
  }
  // 修改链接
  const changeAvatar = async (url: string) => {
    companyInfo.value['a_avatar'] = url
  }
  return { companyInfo, reqData, changeComId, getCompany, updateCom, changeAvatar }
})
