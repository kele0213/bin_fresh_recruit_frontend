import { defineStore } from 'pinia'
import { getDict, uploadAvatar } from '@/service/common/common'
import { ref } from 'vue'
import { showMsg } from '@/utils/message'

export const useCommonStore = defineStore('common', () => {
  const dictData = ref()
  const getdict = async (value: number) => {
    const res = await getDict(value)
    if (res.code === 0) {
      dictData.value = res.data
    }
    return res.data
  }

  // 上传头像
  const uploadVo = ref<string>()
  const upload = async (value: FormData) => {
    value.append('service_type', '0')
    const res = await uploadAvatar(value)
    if (res.code === 0) {
      uploadVo.value = res.data['a_avatar']
      showMsg('上传成功', 'success')
    } else {
      showMsg('上传失败', 'error')
    }
  }

  return {
    dictData,
    getdict,
    uploadVo,
    upload
  }
})
