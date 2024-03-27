<script setup lang="ts">
import {} from 'vue'

</script>

<template>
  <div class="contain">
    <div class="top">
      <el-icon><CirclePlus /></el-icon>
      <span style="margin-left: 4px">新增岗位意向</span>
    </div>
    <div class="bottom">
      <div class="purpose-card" v-for="item in 4" :key="item">
        <div class="card-top">
          <div class="title">Java开发工程师</div>
          <div class="info">
            <span>IT行业</span>
            <span>5-8K</span>
          </div>
        </div>
        <div class="card-bottom">
          <el-icon><Delete /></el-icon>
          <span style="margin-left: 4px">删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.top{
  width: 100%;
  color: rgba(254, 87, 103);
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 15px;
  font-size: 16px;
  cursor: pointer;
}
.bottom{
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
}
.purpose-card{
  width: 48%;
  height: 120px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 0 2px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.card-top{
  margin-top: 15px;
  margin-left: 15px;
}
.title{
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: bolder;
}
.info{
  margin-top: 10px;
}
.info span{
  margin-right: 5px;
  font-size: 16px;
}
.card-bottom{
  color: rgba(254, 87, 103);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>