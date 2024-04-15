<script setup lang="ts">
import { useJobStore } from '@/stores/fresh/job'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import InfoCard from '@/components/fresh/Info-card'
import JobCard from '@/components/fresh/job-card/src/JobCard.vue'

const jobStore = useJobStore()
const { changeCurrentJob, getCompany, getJobList } = jobStore
const { countJob, pageSizeJob, count, pageSize, companyInfo, jobList, reqData } =
  storeToRefs(jobStore)

onMounted(async () => {
  await getCompany()
  await getJobList()
})
// 分页加载数据
const getJobListByPage = async (page: Number) => {
  changeCurrentJob(page)
  await getJobList()
}
</script>

<template>
  <div class="companyJob">
    <InfoCard
      :isJob="false"
      :title="companyInfo?.com_name"
      :comNum="companyInfo?.com_num"
      :comType="companyInfo?.com_type"
    ></InfoCard>
    <JobCard
      class="jobCard"
      :jobList="jobList"
      :total="countJob"
      :page-size="pageSizeJob"
      @page-change="getJobListByPage"
      :current-page="reqData.current"
      :is-page="true"
    />
  </div>
</template>

<style lang="scss" scoped>
.companyJob {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
