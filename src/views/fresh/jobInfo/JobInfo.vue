<script setup lang="ts">
import {onMounted} from 'vue'
import InfoCard from "@/components/fresh/Info-card";
import ComInfo from "@/components/fresh/com-info";
import {useJobStore} from "@/stores/fresh/job";
import {storeToRefs} from "pinia";
import {useInfoStore} from "@/stores/main/company/info";

const jobStore = useJobStore()
const {
  saveSearchContent,
  saveSearch,
  searchJob,
  changeCurrent,
  changeJobId,
  jobInfo,
  getCompany,
  changeComId
} = jobStore
const {searchContent, jobSearchResult, count, pageSize, jobInfoResult, companyInfo} = storeToRefs(jobStore)

onMounted(async () => {
  await jobInfo()
  await getCompany()
})

</script>


<template>
  <div class="jobinfo">
    <InfoCard
        :isJob="true"
        :title="jobInfoResult?.job_name"
        :pay="jobInfoResult?.job_pay"
        :address="jobInfoResult?.com_address"
    ></InfoCard>
    <div class="content">
      <div class="box">
        <span class="title">职位描述</span>
        <p style="margin-top: 20px">{{ jobInfoResult?.job_intro }}</p>
        <span class="c">岗位职责</span>
        <p>{{ jobInfoResult?.job_require }}</p>
      </div>
      <ComInfo
          class="comInfo"
          :avatar="companyInfo?.a_avatar"
          :comName="companyInfo?.com_name"
          :comInfo="companyInfo?.com_intro"
          :comAddress="companyInfo?.com_address"
          :comType="companyInfo?.com_type"
          :comTime="companyInfo?.com_set_time"
          :comNum="companyInfo?.com_num"
      ></ComInfo>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jobinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content {
  margin-top: 20px;
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.box {
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  width: 75%;
  min-height: 500px;
  background-color: #fff;
  border-radius: 10px;
}

// 文字
.title {
  font-weight: bolder;
  font-size: 24px;
  margin-top: 20px;
  margin-left: 20px;
  display: -webkit-box;
  letter-spacing: 4px;
}

.box p {
  margin-left: 20px;
  margin-bottom: 15px;
  margin-right: 20px;
}

.box .c {
  display: -webkit-box;
  margin-left: 20px;
  margin-bottom: 5px;
  font-weight: bolder;
}
</style>
