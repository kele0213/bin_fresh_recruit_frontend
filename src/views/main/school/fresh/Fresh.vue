<script setup lang="ts">
import {} from 'vue'
import ContentTable from "@/components/SecondPackage/content-table";
import {tableConfig,tableData} from "@/views/main/school/fresh/config/tableConfig";
</script>

<template>
  <!-- 应届生管理 -->
  <div class="fresh">
    <div class="data">
      就业数据
    </div>
    <content-table :table-config="tableConfig" :table-data="tableData"/>
  </div>
</template>

<style lang="scss" scoped></style>
