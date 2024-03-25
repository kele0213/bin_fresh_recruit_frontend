<script setup lang="ts">
import {onMounted} from 'vue'
import ComplexSearch from '@/components/SecondPackage/fresh/complex-search/src/complex-search.vue'
import {useJobStore} from "@/stores/fresh/job";
import JobCard from "@/components/fresh/job-card/src/JobCard.vue";
import {storeToRefs} from "pinia";

const jobStore = useJobStore()
const {saveSearchContent, saveSearch, searchJob, changeCurrent} = jobStore
const {searchContent, jobSearchResult, count, pageSize} = storeToRefs(jobStore)

onMounted(async () => {
  await searchJob()
})

const searchJobList = async () => {
  await searchJob()
}
// 跳转岗位详情
const getJobInfo = (data) => {

}
// 跳转企业详情
const getComInfo = (data) => {

}
// 分页加载数据
const getJobListByPage = async (page: Number) => {
  changeCurrent(page)
  await searchJob()
}
</script>

<template>
  <div class="search">
    <ComplexSearch @search="searchJobList"></ComplexSearch>
    <JobCard
        class="jobCard"
        @getJobInfo="getJobInfo"
        @getComInfo="getComInfo"
        :jobList="jobSearchResult"
        :total="count"
        :page-size="pageSize"
        @page-change="getJobListByPage"
        :current-page="searchContent.current"
        :is-page="true"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
}
</style>
