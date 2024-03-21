<script setup lang="ts">
// 打开链接
const openLink = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="btm">
    <div class="left">
      <el-link :underline="false" href="https://github.com/1binbin1/" target="_blank"
        >官网首页</el-link
      >
      <el-link :underline="false" href="https://github.com/1binbin1/" target="_blank"
        >关于我们</el-link
      >
      <el-link :underline="false" href="https://github.com/1binbin1/" target="_blank"
        >服务项目</el-link
      >
      <el-link :underline="false" href="https://github.com/1binbin1/" target="_blank"
        >客户案例</el-link
      >
      <el-link :underline="false" href="https://github.com/1binbin1/" target="_blank"
        >联系我们</el-link
      >
    </div>
    <div class="right">Copyright ©2024. 1binbin1毕业设计版权所有</div>
  </div>
</template>

<style lang="scss" scoped>
.btm {
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .left {
    width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 200px;
  }
  .right {
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color_grey;
  }
}
</style>
