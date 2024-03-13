<script setup lang="ts">
import Bread from './cpns/bread.vue'
import UserInfo from './cpns/userInfo.vue'
import { ref } from 'vue'
const isFold = ref<boolean>(false)
const emit = defineEmits(['changeCollapse'])
const changeFold = () => {
  isFold.value = !isFold.value
  emit('changeCollapse', isFold.value)
}
// import {} from 'vue'
</script>

<template>
  <div class="navHeader">
    <div class="left" @click="changeFold()">
      <!-- 伸缩图标 -->
      <el-icon :size="25">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="middle">
      <!-- 面包屑导航 -->
      <Bread />
    </div>
    <div class="right">
      <!-- 用户信息 -->
      <UserInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navHeader {
  height: 100%;
  display: flex;
  align-items: center;
  //   font-size: 30px;
  .left {
    cursor: pointer;
    margin-top: 3px;
  }
  .middle {
    flex: 1;
    margin-left: 10px;
  }
  .right {
    width: 120px;
  }
}
</style>
