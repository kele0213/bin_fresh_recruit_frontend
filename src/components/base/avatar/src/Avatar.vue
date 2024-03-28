<script setup lang="ts">
import { defineProps } from 'vue'
import type { UploadRequestOptions } from 'element-plus'
import { useAuthStore } from '@/stores/user/auth'
import { storeToRefs } from 'pinia'
import { useInfoStore } from '@/stores/main/company/info'
import { useCommonStore } from '@/stores/common/common'
import { showBox } from '@/utils/message'

const store = useAuthStore()
const { changeAvatarUrl } = store
const { roleData, userInfo } = storeToRefs(store)

const comStore = useInfoStore()
const { changeAvatar } = comStore

const commonStore = useCommonStore()
const { upload } = commonStore
const { uploadVo } = storeToRefs(commonStore)

// 上传头像
const uploadFile = async (file) => {
  const typeArry = ['.png', '.jpg']
  // 上传前检查
  const fileSize = file.size
  const fileName = file.name
  const type = fileName.substring(fileName.lastIndexOf('.'))
  const isFile = typeArry.indexOf(type) > -1
  // 最大1MB
  if (fileSize / 1024 / 1204 > 1) {
    showBox('上传失败', '图片最大仅支持1MB，请重新上传')
    return
  } else if (!isFile) {
    showBox('上传失败', '图片仅支持JPG或PNG格式')
    return
  }
  const formData = new FormData()
  formData.append('file', file.raw)
  formData.append('role', roleData.value)
  // 上传
  await upload(formData)
  // 重新赋值
  await changeAvatarUrl(uploadVo)
  await changeAvatar(uploadVo)
}
</script>

<template>
  <div class="avatarMain">
    <el-upload
      action
      class="avatar-uploader"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="uploadFile"
    >
      <div class="imgContain">
        <img
          v-if="userInfo.a_avatar"
          :src="userInfo.a_avatar"
          class="img"
          title="点击上传头像，最大允许1MB"
        />
        <el-icon v-else class="avatar-uploader-icon">
          <Plus />
        </el-icon>
      </div>
    </el-upload>
  </div>
</template>

<style lang="scss" scoped>
.imgContain {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #00000040;
  overflow: hidden;
  color: #7e7e7e;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
