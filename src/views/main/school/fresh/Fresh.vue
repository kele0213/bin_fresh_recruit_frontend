<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ContentTable from '@/components/SecondPackage/content-table'
import { tableConfig } from '@/views/main/school/fresh/config/tableConfig'
import { useFreshStore } from '@/stores/main/school/fresh'
import { storeToRefs } from 'pinia'
import modalConfig from './config/modalConfig'
import ModalForm from '@/components/SecondPackage/modal-form'

const modalRef = ref<InstanceType<typeof ModalForm>>()

const store = useFreshStore()
const { getFreshList, changeCurrent, addFresh: storeAddFresh } = store
const { freshList, count } = storeToRefs(store)

// 加载数据
onMounted(async () => {
  await getFreshList()
})
// 分页加载数据
const getFreshByPage = async (page: number) => {
  changeCurrent(page)
  await getFreshList()
}
// 弹出添加框
const showModal = () => {
  modalRef.value!.getVisible()
}
// 添加数据
const addFresh = async (data: any) => {
  // 处理数据
  const ids = data.fresh_ids
  const fresh_ids = ids.split(',')
  // console.log(fresh_ids)
  const fresh_data = {
    fresh_ids
  }
  await storeAddFresh(fresh_data)
}
</script>

<template>
  <!-- 应届生管理 -->
  <div class="fresh">
    <!-- <div class="data">就业数据</div> -->
    <content-table
      :table-config="tableConfig"
      :table-data="freshList"
      :total="count"
      :is-edit="false"
      @page-change="getFreshByPage"
      @add="showModal"
    >
      <template #userSex="scope">
        <el-button v-if="scope.row['user_sex'] === 0">男</el-button>
        <el-button v-if="scope.row['user_sex'] === 1">女</el-button>
      </template>
    </content-table>
    <!-- 弹出层/ 添加数据 -->
    <modal-form :form-config="modalConfig" ref="modalRef" @confirm="addFresh"></modal-form>
  </div>
</template>

<style lang="scss" scoped></style>
