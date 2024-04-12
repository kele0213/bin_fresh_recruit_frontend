<script setup lang="ts">
import { onMounted } from 'vue'
import ChatUserList from '@/components/chat/chat-user-list'
import ChatContent from '@/components/chat/chat-content'
import { useChatStore } from '@/stores/chat/chatStore'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/user/auth'
import {ref} from "vue";

const chatStore = useChatStore()
const { freshSend, getLatelyComList, changeComId, getChatList } = chatStore
const { comInfo, chatList, latelyCom } = storeToRefs(chatStore)

const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)

onMounted(async () => {
  await getLatelyComList()
})

const changeStyle = (data: any) => {
  changeComId(data.com_id)
  const actives = document.getElementsByClassName('active')
  for (let i = 0; i < actives.length; i++) {
    actives[i].classList.remove('active')
  }
  const element = document.getElementById(data.com_id)
  element.classList?.add('active')
}

// 发起聊天
const startChat = async (data: string, inputContent: string) => {
  await freshSend({
    com_id: data,
    content: inputContent
  })
}
</script>

<template>
  <!-- 在线咨询 -->
  <div class="consult">
    <!--侧边聊天对象-->
    <ChatUserList
      class="user-list"
      :userType="1"
      :latelyInfo="latelyCom"
      @changeStyle="changeStyle"
    ></ChatUserList>
    <!--  聊天框-->
    <ChatContent
      class="chat-content"
      @startChat="startChat"
      :userType="1"
      :chatList="chatList"
      :userInfo="comInfo"
    ></ChatContent>
  </div>
</template>

<style lang="scss" scoped>
.consult {
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 20px;
}

.user-list {
  height: 96%;
  width: 25%;
  margin-right: 10px;
  margin-left: 10px;
}

.chat-content {
  height: 96%;
  width: 75%;
  margin-right: 10px;
}
</style>
