<script setup lang="ts">
import {ref, type PropType, watch, defineProps, defineExpose, defineEmits} from 'vue'
import type {IFormConfig} from '@/components/base/form/type/type'
import KlForm from '@/components/base/form'
import ChatContent from "@/components/chat/chat-content";
import {useChatStore} from "@/stores/chat/chatStore";

const chatStore = useChatStore()
const {freshSend} = chatStore

defineProps({
  userType: {
    type: Number,
    default: 1
  },
  chatList: {},
  userInfo: {}
})

// 发起聊天
const startChat = async (data: string, inputContent: string) => {
  await freshSend({
    com_id: data,
    content: inputContent
  })
}

// 可视化
const dialogVisible = ref(false)
defineExpose({
  getVisible() {
    dialogVisible.value = true
  }
})

</script>

<template>
  <div class="chat-window">
    <el-dialog v-model="dialogVisible" width="600">
      <ChatContent class="chat-content" @startChat="startChat" :userInfo="userInfo" :userType="userType"
                   :chatList='chatList'></ChatContent>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
