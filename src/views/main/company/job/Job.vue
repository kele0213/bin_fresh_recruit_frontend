<script setup lang="ts">
import {onMounted, ref} from 'vue'
import ContentTable from '@/components/SecondPackage/content-table'
import {tableConfig} from "@/views/main/company/job/config/tableConfig";
import {useJobStore} from "@/stores/main/company/job";
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/user/auth";
import ModalForm from "@/components/SecondPackage/modal-form";
import modalConfig from '@/views/main/company/job/config/modalConfig'
import type {AddJobRequest} from "@/service/company/type";

const modalRef = ref<InstanceType<typeof ModalForm>>()

const store = useJobStore()
const authStore = useAuthStore()
const {userInfo} = storeToRefs(authStore)
const {changeCurrent, changeData, getJobList, addJob} = store
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

</script>

<template>
  <!-- 岗位管理 -->
  <div class="job">
    <content-table
        :table-config="tableConfig"
        :table-data="jobList"
        :total="count"
        @page-change="getJobListByPage"
        :page-size="pageSize"
        @fresh="pageJobFresh"
        @add="showModal"
    />
  </div>
  <modal-form :form-config="modalConfig" ref="modalRef" @confirm="addJobOne"></modal-form>
</template>

<style lang="scss" scoped></style>
