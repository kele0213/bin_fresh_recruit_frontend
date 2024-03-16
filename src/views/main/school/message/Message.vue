<script setup lang="ts">
import {} from 'vue'
import ContentTable from '@/components/SecondPackage/content-table'
import { tableConfig, tableData } from '@/views/main/school/message/config/tableConfig'
const test = (value: any) => {
  console.log(value)
}
</script>

<template>
  <!-- 咨询管理 -->
  <div class="Message">
    <content-table
      :table-data="tableData"
      :table-config="tableConfig"
      @page-change="test"
      :total="100"
    />
  </div>
</template>

<style lang="scss" scoped></style>
