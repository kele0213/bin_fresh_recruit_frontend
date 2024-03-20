<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ContentTable from '@/components/SecondPackage/content-table'
import { tableConfig } from '@/views/main/school/message/config/tableConfig'
import ModalForm from '@/components/SecondPackage/modal-form'
import { useMessageStore } from '@/stores/main/school/message'
import { storeToRefs } from 'pinia'
import modalConfig from '@/views/main/school/message/config/modalConfig'
import updateConfig from '@/views/main/school/message/config/updateConfig'
import type { AddMessageRequest } from '@/service/school/type'
import searchConfig from './config/searchConfig'
import SearchForm from '@/components/SecondPackage/search-form'

const modalRef = ref<InstanceType<typeof ModalForm>>()
const updateRef = ref<InstanceType<typeof ModalForm>>()

const store = useMessageStore()
const {
  getMessageList,
  changeCurrent,
  addMessageInfo: messageAdd,
  changeReqData,
  deleteMessageData,
  updateMessageData
} = store
const { messageList, count, pageSize, reqData } = storeToRefs(store)

// 加载数据
onMounted(async () => {
  await getMessageList()
})
// 分页加载数据
const getMessageByPage = async (page: number) => {
  await changeCurrent(page)
  await getMessageList()
}
// 弹出添加框
const showModal = () => {
  modalRef.value!.getVisible()
}
// 弹出修改框
const updateData = ref()
const showUpdateModal = (value: any) => {
  updateRef.value!.getVisible()
  updateData.value = { ...value }
}
// 添加数据
const addMessage = async (data: any) => {
  // 处理数据
  const title = data.title
  const message = data.message
  const addData = ref<AddMessageRequest>({
    title: title,
    message: message
  })
  await messageAdd(addData.value)
}
// 更新数据
const updateMessage = async (data: any) => {
  const id = data.id
  const title = data['title']
  const intro_content = data['intro_content']
  const updateReq = ref({
    id,
    title,
    intro_content
  })
  await updateMessageData(updateReq.value)
}

// 查询数据
const searchMessage = async (data: any) => {
  await changeReqData(data.search_content)
  await getMessageList()
}
// 刷新数据
const pageFresh = async () => {
  await changeReqData('')
  await getMessageList()
}
// 删除数据
const deleteMessage = async (value: any) => {
  const data = {
    id: value.id
  }
  await deleteMessageData(data)
}
// 编辑数据
</script>

<template>
  <!-- 资讯管理 -->
  <div class="Message">
    <search-form :form-config="searchConfig" @search="searchMessage"></search-form>
    <content-table
      :table-data="messageList"
      :table-config="tableConfig"
      @page-change="getMessageByPage"
      :total="count"
      @add="showModal"
      :page-size="pageSize"
      @fresh="pageFresh"
      :current-page="reqData.current"
      @delete="deleteMessage"
      @edit="showUpdateModal"
    />
    <!--  弹出框 添加数据 编辑数据-->
    <modal-form :form-config="modalConfig" ref="modalRef" @confirm="addMessage"></modal-form>
    <modal-form
      :form-config="updateConfig"
      :data="updateData"
      ref="updateRef"
      @confirm="updateMessage"
    ></modal-form>
  </div>
</template>

<style lang="scss" scoped></style>
