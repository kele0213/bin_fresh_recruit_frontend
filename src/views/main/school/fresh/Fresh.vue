<script setup lang="ts">
import { onMounted, ref } from 'vue'
// 组件
import ModalForm from '@/components/SecondPackage/modal-form'
import ContentTable from '@/components/SecondPackage/content-table'
import FreshData from '@/components/base/fresh-data'
// 配置文件
import tableConfig from '@/views/main/school/fresh/config/tableConfig'
import modalConfig from './config/modalConfig'
// 仓库
import { useFreshStore } from '@/stores/main/school/fresh'
import { storeToRefs } from 'pinia'

const modalRef = ref<InstanceType<typeof ModalForm>>()

const store = useFreshStore()
const { getFreshList, changeCurrent, addFresh: storeAddFresh, deleteFreshData } = store
const { freshList, count, pageSize, reqData } = storeToRefs(store)

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
// 页面刷新
const pageFresh = async () => {
  await getFreshList()
}
// 删除数据
const deleteFresh = async (value: any) => {
  const data = {
    fresh_id: value['user_id']
  }
  await deleteFreshData(data)
}
</script>

<template>
  <!-- 应届生管理 -->
  <div class="fresh">
    <fresh-data />
    <content-table
      :table-config="tableConfig"
      :table-data="freshList"
      :total="count"
      :is-edit="false"
      @page-change="getFreshByPage"
      @add="showModal"
      :page-size="pageSize"
      @fresh="pageFresh"
      :current-page="reqData.current"
      @delete="deleteFresh"
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
