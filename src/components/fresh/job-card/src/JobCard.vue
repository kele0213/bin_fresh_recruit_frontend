<script setup lang="ts">

</script>

<template>
  <div class="jobContent">
    <div class="card" v-for="item in 12" :key="item">
      <div class="top">
        <div class="left">
          <div class="name">Java开发工程师</div>
          <el-icon class="chat"><ChatDotSquare/></el-icon>
        </div>
        <div class="right">8-10k</div>
      </div>
      <div class="center">
        <p>岗位岗位岗位岗岗位岗位岗</p>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <div class="avatar">
            <img src="https://1binbin1.oss-cn-guangzhou.aliyuncs.com/1binbin1/public_photo/slideshow.png" alt="">
          </div>
          <div class="comName">XXXXXXXXXX公司</div>
        </div>
        <div class="bottom-right">广东·天河区广东·天河区广东·天河区</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jobContent {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
  margin-bottom: 10px;
  margin-top: 10px;
}

.card {
  flex: 1;
  margin: 0 25px 25px 0;
  width: calc((100% - 50px) / 3);
  min-width: calc((100% - 50px) / 3);
  max-width: calc((100% - 50px) / 3);
}

.card:nth-child(3n) {
  // 去除第3n个的margin-right
  margin-right: 0;
}

// 内容区
.card{
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: auto;
  border-radius: 12px;
}
.card:hover{
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);;
}
// 顶部
.top{
  display: flex;
  justify-content: space-between;
  margin: 12px 12px 0 15px;
}
.top .right{
  color: red;
  font-size: 18px;
}
.top .left{
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.chat{
  font-size: 25px;
  margin-left: 8px;
  cursor: pointer;
}
// 中部
.center{
  margin: 12px 15px;
  background-color: rgb(248, 252, 251);
  border-radius: 10px;
  padding: 10px;
  width: 60%;
  min-height: 50px;
}
p{
  font-size: 16px;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
}
// 底部
.bottom{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background-color: rgb(248, 252, 251);
  border-radius: 0 0 12px 12px;
}
.bottom .bottom-left,.comName,{
  display: flex;
  justify-content: center;
  align-content: center;
}
.avatar{
  margin: 5px 5px 5px 15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #6e6e6e;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
}
.avatar img{
  width: 100%;
}
.comName,.bottom-right{
  font-size: 14px;
  height: 50px;
  line-height: 52px;
  text-align: center;
}
.bottom-right{
  margin-right: 12px;
  width: 140px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
