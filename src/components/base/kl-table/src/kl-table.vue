<script setup lang="ts">
import {} from 'vue'
import type { IpropList } from '..'
// props
defineProps({
  isShowIndex: {
    type: Boolean,
    default: false
  },
  isShowSelect: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  propList: {
    type: Array<IpropList>,
    required: true
  },
  tableData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="table">
    <div class="header">
      <div class="title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="titleHandler">
        <slot name="titleHandler"></slot>
      </div>
    </div>
    <div class="container">
      <!-- 表格本体 -->
      <el-table :data="tableData" stripe style="width: 100%" highlight-current-row>
        <el-table-column align="center" type="selection" width="55" v-if="isShowSelect" />
        <el-table-column align="center" type="index" width="55" v-if="isShowIndex" />
        <template v-for="prop in propList" :key="prop.field">
          <el-table-column v-bind="prop" align="center">
            <template #default="scope">
              <slot :name="prop.slotName" :row="scope.row">
                {{ prop.field ? scope.row[prop.field] : '' }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="footer">
      <!-- 后面用来放分页器 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  // margin: 10px;
  font-weight: 700;
  font-size: 18px;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 30px;
}
</style>
