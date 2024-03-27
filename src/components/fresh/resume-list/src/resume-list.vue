<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useMainStore} from "@/stores/fresh/main";
import {defineEmits, defineProps, onMounted} from "vue";
import router from "@/router";
import {useJobStore} from "@/stores/fresh/job";
import {useInfoStore} from "@/stores/main/company/info";
import {useResumeStore} from "@/stores/fresh/resume";

const resumeStore = useResumeStore()
const {uploadResume, getResumeList, deleteResumeInfo} = resumeStore
const {resumeList} = storeToRefs(resumeStore)

defineProps({})

onMounted(async () => {
  await getResumeList()
})
const openResume = (data: string) => {
  window.open(data, "_blank")
}
// 上传简历
const uploadResumeInfo = async (file) => {
  await uploadResume(file)
}
// 删除简历
const deleteResume = async (data: string) => {
  await deleteResumeInfo(data)
  await getResumeList()
}

</script>

<template>
  <div class="resume-list">
    <div class="list-top">
      <span class="title">简历附件</span>
      <div class="upload">
        <el-upload
            action
            :show-file-list="false"
            :auto-upload="false"
            :on-change="uploadResumeInfo"
        >
          <el-icon>
            <DocumentAdd/>
          </el-icon>
          <span style="margin-left: 4px">新增简历附件</span>
        </el-upload>
      </div>
    </div>
    <div class="list-bottom">
      <div class="bottom-content" v-for="item in resumeList" :key="item">
        <div class="content">
          <div class="bottom-left">
            <el-icon style="font-size: 28px">
              <Document/>
            </el-icon>
            <span style="margin-left: 6px;max-width: 180px;cursor: pointer"
                  @click="openResume(item.user_name_link)">{{ item.resume_name }}</span>
          </div>
          <div class="bottom-right" @click="deleteResume(item.resume_id)">删除</div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-list {
  height: 650px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
}

.list-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.list-top .title {
  font-size: 20px;
  font-weight: bolder;
  margin-top: 10px;
  margin-left: 10px;
  letter-spacing: 4px;
}

.upload {
  color: rgba(254, 87, 103);
  margin-top: 10px;
  margin-right: 10px;
}

.list-bottom {
  margin-top: 15px;
  width: 94%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bottom-content {
  width: 100%;
}

.content {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;
}

.bottom-right {
  cursor: pointer;
  color: rgba(254, 87, 103);
}

.line {
  height: 1px;
  width: 100%;
  background-color: #2c3e50;
  margin-top: 20px;
}

.bottom-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
