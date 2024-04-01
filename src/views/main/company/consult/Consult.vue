<script setup lang="ts">
import {onMounted} from 'vue'
import ChatUserList from "@/components/chat/chat-user-list";
import ChatContent from "@/components/chat/chat-content";
import {useChatStore} from "@/stores/chat/chatStore";
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/user/auth";

const chatStore = useChatStore()
const {comSend, getLatelyFreshList, changFreshId,getChatList} = chatStore
const {freshInfo, chatList, latelyFresh} = storeToRefs(chatStore)

const authStore = useAuthStore()
const {userInfo} = storeToRefs(authStore)

onMounted(async () => {
  await getLatelyFreshList()
})

const changeStyle = (data: any) => {
  changFreshId(data.user_id)
  const actives = document.getElementsByClassName('active');
  for (let i = 0; i < actives.length; i++) {
    actives[i].classList.remove('active')
  }
  const element = document.getElementById(data.user_id);
  element.classList?.add('active');
}

// 发起聊天
const startChat = async (data: string, inputContent: string) => {
  await comSend({
    user_id: data,
    content: inputContent
  })
}
</script>

<template>
  <!-- 在线咨询 -->
  <div class="consult">
    <!--侧边聊天对象-->
    <ChatUserList class="user-list" :userType="2" :latelyInfo="latelyFresh" @changeStyle="changeStyle"></ChatUserList>
    <!--  聊天框-->
    <ChatContent class="chat-content" @startChat="startChat" :userType="2" :chatList="chatList"
                 :userInfo="freshInfo"></ChatContent>
  </div>
</template>

<style lang="scss" scoped>
.consult {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
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
