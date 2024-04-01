<script setup lang="ts">
import {defineEmits, defineProps, onMounted, ref, onBeforeUnmount} from 'vue'
import {useChatStore} from "@/stores/chat/chatStore";
import {storeToRefs} from "pinia";
import {formatUTC} from '@/utils/formatTime'
import type {ChatVo} from "@/service/chat/type";
import localCache from "@/utils/localCache";

const inputContent = ref()
const chatStore = useChatStore()
const {getChatList} = chatStore
// const {freshInfo, chatListCom} = storeToRefs(chatStore)

const propds = defineProps({
  userType: {
    type: Number,
    default: 1
  },
  chatList: {},
  userInfo: {}

})

const emit = defineEmits(['startChat'])
const send = async (data: string) => {
  emit('startChat', data, inputContent.value)
  inputContent.value = ''
}

/*let intervaild
onMounted(async () => {
  intervaild = setInterval(async () => {
    if (propds.userType === 1) {
      console.log(1)
      await getChatList({
        user_id: localCache.getCache("userId"),
        com_id: propds.userInfo.com_id,
      })
    }
    if (propds.userType === 2) {
      console.log(2)
      await getChatList({
        user_id: propds.userInfo.user_id,
        com_id: localCache.getCache("userId"),
      })
    }
  }, 10000);
})
onBeforeUnmount(() => {
  clearInterval(intervaild)
})*/

</script>

<template>
  <div class="chat-content">
    <el-skeleton :rows="16" v-if="!userInfo"/>
    <div class="have-content" v-if="userInfo">
      <div class="content-top">
        <div class="imgContain">
          <img class="img" :src="userInfo?.a_avatar" alt="">
        </div>
        <div class="info">
          <div class="info-top" v-if="userType===1">{{ userInfo?.com_name === '' ? '暂无昵称' : userInfo?.com_name }}</div>
          <div class="info-top" v-if="userType===2">{{
              userInfo?.user_name === '' ? '暂无昵称' : userInfo?.user_name
            }}
          </div>
          <div class="info-bottom" v-if="userType===2">
            <el-tag class="tag">{{ userInfo?.user_sex }}</el-tag>
            <el-tag class="tag">{{ userInfo?.user_major }}</el-tag>
            <el-tag class="tag">{{ userInfo?.user_school }}</el-tag>
            <el-tag class="tag">{{ userInfo?.user_education }}</el-tag>
            <el-tag class="tag">{{ userInfo?.user_year }}</el-tag>
          </div>
        </div>
      </div>
      <div class="content-center" id="content-center1" v-if="userType === 2">
        <div class="list" v-for="item in chatList" :key="item">
          <div class="chat-list-right" v-if="item?.user_type === 2">
            <div class="right-content">
              <div class="content" style="background-color: #00a6a7">{{ item?.chat_content }}</div>
              <span class="content-time">{{ formatUTC(item.create_time) }}</span>
            </div>
            <div class="avatar">
              <img class="avatar-img" :src="item?.a_avatar" alt=""/>
            </div>
          </div>
          <div class="chat-list-left" v-if="item?.user_type === 1">
            <div class="left-content">
              <div class="content" style="background-color: #e8f3f3">{{ item?.chat_content }}</div>
              <span class="content-time">{{ formatUTC(item.create_time) }}</span>
            </div>
            <div class="avatar">
              <img class="avatar-img" :src="item?.a_avatar" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-center" id="content-center2" v-if="userType === 1">
        <div class="list" v-for="item in chatList" :key="item">
          <div class="chat-list-right" v-if="item?.user_type === 1">
            <div class="right-content">
              <div class="content" style="background-color: #00a6a7">{{ item?.chat_content }}</div>
              <span class="content-time">{{ formatUTC(item.create_time) }}</span>
            </div>
            <div class="avatar">
              <img class="avatar-img" :src="item?.a_avatar" alt=""/>
            </div>
          </div>
          <div class="chat-list-left" v-if="item?.user_type === 2">
            <div class="left-content">
              <div class="content" style="background-color: #e8f3f3">{{ item?.chat_content }}</div>
              <span class="content-time">{{ formatUTC(item.create_time) }}</span>
            </div>
            <div class="avatar">
              <img class="avatar-img" :src="item?.a_avatar" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <el-input v-model="inputContent" style="width: 85%;margin-right: 10px;height: 60%" placeholder="回复内容"
                  class="input" clearable></el-input>
        <el-button style="width: 10%;height: 60%" @click="send(userInfo?.com_id)" v-if="userType === 1">发送</el-button>
        <el-button style="width: 10%;height: 60%" @click="send(userInfo?.user_id)" v-if="userType === 2">发送</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-content {
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.have-content {
  width: 100%;
  height: 100%;
}

.content-top {
  border-radius: 8px 8px 0 0;
  height: 80px;
  width: 100%;
  background-color: #00a6a7;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content-center {
  height: 490px;
  width: 100%;
  overflow-y: auto;
}

.content-bottom {
  height: 60px;
  width: 100%;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.imgContain {
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #00000040;
  color: #7e7e7e;
  overflow: hidden;
  margin-left: 15px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.info-top {
  font-size: 18px;
  letter-spacing: 4px;
  color: #fff;
  font-weight: bolder;
}

.tag {
  margin-right: 10px;
  margin-top: 5px;
}

:deep(.el-tag.el-tag--primary) {
  font-size: 12px;
  height: 18px;
}

.info-bottom {
  display: flex;
  flex-direction: row;
  //flex-wrap: wrap;
  width: 300px;
}

// 聊天区域
.avatar {
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #00000040;
  color: #7e7e7e;
  overflow: hidden;
  margin-left: 10px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-list-right, .chat-list-left {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 15px 0;
}

.chat-list-right {
  flex-direction: row;
}

.chat-list-left {
  flex-direction: row-reverse;
}

.content {
  max-width: 200px;
  height: auto;
  white-space: normal;
  word-wrap: break-word;
  display: inline-block;
  overflow-wrap: break-word;
  box-sizing: border-box;
  padding: 5px;
  letter-spacing: 2px;
  border-radius: 4px;
  font-size: 16px;
}

.right-content, .left-content {
  display: flex;
  flex-direction: column;
}

.right-content {
  align-items: flex-end;
}

.left-content {
  align-items: flex-start;
}

.content-time {
  display: inline-block;
  width: auto;
  font-size: 14px;
  margin-top: 4px;
}
</style>
