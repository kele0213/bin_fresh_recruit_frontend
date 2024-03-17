<script setup lang="ts">
import {onMounted, ref} from 'vue'
import ContentTable from '@/components/SecondPackage/content-table'
import {tableConfig} from '@/views/main/school/message/config/tableConfig'
import ModalForm from "@/components/SecondPackage/modal-form";
import {useMessageStore} from "@/stores/main/school/message";
import {storeToRefs} from "pinia";
import modalConfig from "@/views/main/school/message/config/modalConfig";
import {AddMessageRequest} from "@/service/school/type";

const modalRef = ref<InstanceType<typeof ModalForm>>()

const store = useMessageStore()
const {getMessageList, changeCurrent, addMessageInfo:messageAdd} = store
const {messageList, count,pageSize} = storeToRefs(store)

// 加载数据
onMounted(async () => {
  await getMessageList()
})
// 分页加载数据
const getMessageByPage = async (page: number) => {
  changeCurrent(page)
  await getMessageList()
}
// 弹出添加框
const showModal = () => {
  modalRef.value!.getVisible()
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
</script>

<template>
  <!-- 资讯管理 -->
  <div class="Message">
    <content-table
        :table-data="messageList"
        :table-config="tableConfig"
        @page-change="getMessageByPage"
        :total="count"
        @add="showModal"
        :page-size="pageSize"
    />
    <!--  弹出框 添加数据-->
    <modal-form :form-config="modalConfig" ref="modalRef" @confirm="addMessage"></modal-form>
  </div>
</template>

<style lang="scss" scoped></style>
