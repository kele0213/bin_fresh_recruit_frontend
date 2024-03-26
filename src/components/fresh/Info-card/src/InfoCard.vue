<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useMainStore} from "@/stores/fresh/main";
import {defineEmits, defineProps, onMounted} from "vue";

defineProps({
  // 是否为岗位详情
  isJob: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: '暂无名称'
  },
  pay: {
    type: String,
    default: '暂无薪资'
  },
  address: {
    type: String,
    default: '暂无工作地址'
  },
  comNum: {
    type: String,
    default: "暂未提供公规模"
  },
  comType: {
    type: String,
    default: "暂未提供公司类型"
  },
  jobType: {
    type: String,
    default: "暂无岗位类别"
  }
})

const emit = defineEmits(["getJobInfo"])
const clickFn = (data: any) => {
  emit("getJobInfo", data)
}

</script>

<template>
  <div class="contain">
    <div class="top">
      <span class="left">{{ title }}</span>
      <span class="right" v-if="isJob">{{ pay }}</span>
    </div>
    <div class="center">
      <el-icon v-if="isJob" style="margin-right: 5px">
        <Location/>
      </el-icon>
      <span v-if="isJob">{{ address }}</span>
      <el-icon v-if="isJob" style="margin-left: 20px;margin-right:5px">
        <Tickets/>
      </el-icon>
      <span v-if="isJob">{{ jobType }}</span>
      <span v-if="!isJob">{{ comNum + ' · ' + comType }}</span>
    </div>
    <div class="bottom">
      <span class="left">
        <el-button>立即沟通</el-button>
        <el-button style="margin-left: 20px" v-if="isJob">立即投递</el-button>
      </span>
      <span class="right">
        <el-icon><Document/></el-icon>
        <span style="margin-left: 6px">新增简历附件</span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain {
  width: 100%;
  min-height: 152px;
  background-color: rgb(59, 82, 106);
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
}

.top, .center, .bottom {
  width: 75%;
}

.top {
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
}

.center {
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  color: #fff;
  letter-spacing: 2px;
}

.bottom {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}

// 顶部
.top .left {
  font-size: 26px;
  margin-right: 10px;
  color: #fff;
  font-weight: bolder;
  letter-spacing: 2px;
}

.top .right {
  font-size: 22px;
  margin-right: 10px;
  color: rgb(202, 77, 43);
  font-weight: bolder;
  letter-spacing: 2px;
}

// 底部
.bottom .right {
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  color: #00a6a7;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
}

:deep(.el-button) {
  background-color: #00a6a7;
  border: none;
  border-radius: 10px;
  height: 35px;
  width: 110px;
  color: #fff;
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 16px;
}

:deep(.el-button:hover) {
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}
</style>
