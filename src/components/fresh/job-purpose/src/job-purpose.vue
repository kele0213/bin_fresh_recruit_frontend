<script setup lang="ts">
import {onMounted} from 'vue'
import {usePurposeStore} from "@/stores/fresh/purpose";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import ModalForm from "@/components/SecondPackage/modal-form";

const purposeStore = usePurposeStore()
const {getPurposeList, addPurpose, deletePurpose} = purposeStore
const {purposeList} = storeToRefs(purposeStore)
const modalRef = ref<InstanceType<typeof ModalForm>>()
import addConfig from "@/components/fresh/job-purpose/src/addConfig";
import {showMsg} from "@/utils/message";
onMounted(async () => {
  await getPurposeList()
})

const deleteInfo = async (data: number) => {
  await deletePurpose(data)
}

// 弹出添加框
const showModal = () => {
  modalRef.value!.getVisible()
}

const addPurposeOne = async (data: any) => {
  let start = data.job_pay_start
  let end = data.job_pay_end
  if (start == '' && end == ''){
    showMsg('添加失败，意向薪资为空',"error")
    return
  }
  if (start ===''){
    start = end
  }
  if (end ===''){
    end = start
  }
  if (data.city == '' || data.job_type == ''){
    showMsg('添加失败，意向城市或意向岗位类别为空',"error")
    return
  }
  await addPurpose({
    num: 4,
    city: data.city,
    job_type: data.job_type,
    job_pay: start +'-'+ end
  })
}
</script>

<template>
  <div class="contain">
    <div class="top" @click="showModal">
      <el-icon>
        <CirclePlus/>
      </el-icon>
      <span style="margin-left: 4px">新增岗位意向</span>
    </div>
    <div class="bottom">
      <div class="purpose-card" v-for="item in purposeList" :key="item">
        <div class="card-top">
          <div class="title">意向城市：{{ item?.city }}</div>
          <div class="info">
            <span>{{ item?.job_type }}</span>
            <span style="margin-left: 10px">{{ item?.job_pay }}</span>
          </div>
        </div>
        <div class="card-bottom">
          <el-icon>
            <Delete/>
          </el-icon>
          <span style="margin-left: 4px" @click="deleteInfo(item?.id)">删除</span>
        </div>
      </div>
    </div>
    <modal-form :form-config="addConfig" ref="modalRef" @confirm="addPurposeOne"></modal-form>
  </div>
</template>

<style lang="scss" scoped>
.contain {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.top {
  width: 100%;
  color: rgba(254, 87, 103);
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 22px;
  font-size: 16px;
  cursor: pointer;
}

.bottom {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}

.purpose-card {
  width: 47%;
  height: 120px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.card-top {
  margin-top: 15px;
  margin-left: 15px;
}

.title {
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: bolder;
}

.info {
  margin-top: 10px;
}

.info span {
  margin-right: 5px;
  font-size: 16px;
}

.card-bottom {
  color: rgba(254, 87, 103);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>