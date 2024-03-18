<script setup lang="ts">
import {onMounted, ref} from 'vue'
import ContentTable from '@/components/SecondPackage/content-table'
import {tableConfig} from "@/views/main/company/job/config/tableConfig";
import {useJobStore} from "@/stores/main/company/job";
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/user/auth";
import ModalForm from "@/components/SecondPackage/modal-form";
import modalConfig from '@/views/main/company/job/config/modalConfig'
import updateConfig from "@/views/main/company/job/config/updateConfig";
import searchConfig from "@/views/main/company/job/config/searchConfig";
import type {AddJobRequest} from "@/service/company/type";
import SearchForm from "@/components/SecondPackage/search-form/src/search-form.vue";

const modalRef = ref<InstanceType<typeof ModalForm>>()
const updateRef = ref<InstanceType<typeof ModalForm>>()

const store = useJobStore()
const authStore = useAuthStore()
const {userInfo} = storeToRefs(authStore)
const {changeCurrent, changeData, getJobList, addJob, deleteJob, updateJob} = store
const {jobList, reqData, count, pageSize} = storeToRefs(store)

// 加载数据
onMounted(async () => {
  await changeData({
    com_id: userInfo.value.id,
    search_content: ""
  })
  await getJobList()
})

// 分页加载数据
const getJobListByPage = async (page: Number) => {
  changeCurrent(page)
  await getJobList()
}

// 刷新数据
const pageJobFresh = async () => {
  await changeData({
    com_id: userInfo.value.id,
    search_content: ""
  })
  await getJobList()
}

// 弹出添加框
const showModal = () => {
  modalRef.value!.getVisible()
}
// 添加岗位
const addJobOne = async (data: any) => {
  const addData = ref<AddJobRequest>({
    job_name: data.job_name,
    job_type: data.job_type,
    job_intro: data.job_intro,
    job_require: data.job_require,
    job_pay: data.job_pay,
  })
  await addJob(addData.value)
}
// 删除岗位
const deleteJobById = async (value: any) => {
  const data = {
    job_id: value['job_id']
  }
  await deleteJob(data)
}
// 弹出修改框
const updateData = ref()
const showUpdateModal = (value: any) => {
  updateRef.value!.getVisible()
  updateData.value = {...value}
}
// 编辑数据
const updateJobById = async (data: any) => {
  const updateReq = ref({
    job_id: data.job_id,
    job_name: data.job_name,
    job_type: data.job_type,
    job_intro: data.job_intro,
    job_require: data.job_require,
    job_pay: data.job_pay,
  })
  await updateJob(updateReq.value)
}
// 查询数据
const searchJob = async (data: any) => {
  await changeData({
    com_id: userInfo.value.id,
    search_content: data.search_content
  })
  await getJobList()
}

</script>

<template>
  <!-- 岗位管理 -->
  <div class="job">
    <search-form :form-config="searchConfig" @search="searchJob"></search-form>
    <content-table
        :table-config="tableConfig"
        :table-data="jobList"
        :total="count"
        @page-change="getJobListByPage"
        :page-size="pageSize"
        @fresh="pageJobFresh"
        @add="showModal"
        @delete="deleteJobById"
        @edit="showUpdateModal"
    />
  </div>
  <modal-form :form-config="modalConfig" ref="modalRef" @confirm="addJobOne"></modal-form>
  <modal-form :form-config="updateConfig" ref="updateRef" :data="updateData" @confirm="updateJobById"></modal-form>
</template>

<style lang="scss" scoped></style>
