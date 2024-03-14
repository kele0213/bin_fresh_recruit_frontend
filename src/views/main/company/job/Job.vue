<script setup lang="ts">
import { ref } from 'vue'
import SearchForm from '@/components/SecondPackage/search-form/'
import searchConfig from './config/searchConfig'
import modalConfig from './config/modalConfig'
import ModalForm from '@/components/SecondPackage/modal-form'
import data from './config/data'
const modalRef = ref<InstanceType<typeof ModalForm>>()
const test = () => {
  modalRef.value?.getVisible()
}
const confirm = (value: any) => {
  console.log(value)
}
</script>

<template>
  <!-- 岗位管理 -->
  <div class="job">
    <SearchForm :formConfig="searchConfig"></SearchForm>
    <ModalForm :formConfig="modalConfig" :data="data" ref="modalRef" @confirm="confirm"></ModalForm>
    <el-button @click="test">test</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
