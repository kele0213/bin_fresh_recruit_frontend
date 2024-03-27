<script setup lang="ts">

import {defineEmits, defineProps, onMounted, ref} from "vue";
import Avatar from "@/components/base/avatar";
import {useAuthStore} from "@/stores/user/auth";
import {storeToRefs} from "pinia";
import {useMainStore} from "@/stores/fresh/main";
import ModalForm from "@/components/SecondPackage/modal-form/src/modal-form.vue";
import updateConfig from '@/components/fresh/fresh-info/src/updateConfig'

const updateRef = ref<InstanceType<typeof ModalForm>>()

const authStore = useAuthStore()
const {userInfo} = storeToRefs(authStore)

const mainStore = useMainStore()
const {getFreshInfo, updateFreshInfo} = mainStore
const {freshOneInfo} = storeToRefs(mainStore)
const emit = defineEmits([""])
const clickFn = (data: any) => {
}

onMounted(async () => {
  await getFreshInfo(userInfo.value.id)
})
const update = async (data: any) => {
  await updateFreshInfo({
    user_name: data['user_name'],
    user_sex: data['user_sex'] === '男' ? 0 : 1,
    user_phone: data['user_phone'],
    user_email: data['user_email'],
    user_school: data['user_school'],
    user_major: data['user_major'],
    user_year: data['user_year'],
    user_education: data['user_education'],
  })
  await getFreshInfo(data['user_id'])
}

// 弹出修改框
const showModal = () => {
  updateRef.value!.getVisible()
}
</script>

<template>
  <div class="content">
    <div class="edit">
      <el-icon>
        <Edit/>
      </el-icon>
      <span style="margin-left: 5px" @click="showModal">编辑个人信息</span>
    </div>
    <div class="top">
      <Avatar class="avatar"/>
      <div class="info">
        <span class="name">{{ freshOneInfo?.user_name === undefined ? '暂无昵称' : freshOneInfo?.user_name }}</span>
        <div class="tag">
          <el-tag class="sex">{{ freshOneInfo?.user_sex }}</el-tag>
          <el-tag class="year" style="margin-left: 10px">
            {{ freshOneInfo?.user_year }}
          </el-tag>
          <el-tag class="education" style="margin-left: 10px">
            {{ freshOneInfo?.user_education }}
          </el-tag>
        </div>
      </div>
    </div>
    <div class="bottom">
      <el-descriptions size="large" column="3" border>
        <el-descriptions-item label="账号">{{ freshOneInfo?.user_id ?? '暂无账号' }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ freshOneInfo?.user_phone ?? '暂无手机号' }}</el-descriptions-item>
        <el-descriptions-item label="学校">{{ freshOneInfo?.user_school ?? '暂无学校' }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ freshOneInfo?.user_email ?? '暂无邮箱' }}</el-descriptions-item>
        <el-descriptions-item label="专业">{{ freshOneInfo?.user_major ?? '暂无专业' }}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
  <modal-form :form-config="updateConfig" ref="updateRef" :data="freshOneInfo" @confirm="update"></modal-form>
</template>

<style lang="scss" scoped>
.content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
}

.edit {
  display: flex;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  color: rgb(254, 87, 103);
  align-items: center;
  font-size: 18px;
  cursor: pointer;
}

.top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.avatar {
  margin-left: 20px;
  margin-top: 20px;
}

.info {
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 28px;
  font-weight: bolder;
}

.tag {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.bottom {
  margin-top: 10px;
  padding-bottom: 20px;
  margin-left: 20px;
  padding-right: 20px;
}

:deep(.el-descriptions--large .el-descriptions__body .el-descriptions__table .el-descriptions__cell) {
  font-size: 16px;
}
</style>
