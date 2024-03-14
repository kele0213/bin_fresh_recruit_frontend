<script setup lang="ts">
import { ref, type PropType } from 'vue'
import type { IFormConfig } from '@/components/base/form/type/type'
import KlForm from '@/components/base/form'

const props = defineProps({
  formConfig: {
    type: Object as PropType<IFormConfig>,
    required: true
  }
})

// 初始化数据
const formItems = props.formConfig.formItems || []
const baseFormData: any = {}
for (const item of formItems) {
  baseFormData[item.field] = ''
}
const formData = ref(baseFormData)
// 搜索/重置
const emit = defineEmits(['search'])
const search = () => {
  emit('search', formData.value)
}
const reset = () => {
  formData.value = baseFormData
}
</script>

<template>
  <div class="search-form">
    <kl-form v-bind="formConfig" v-model="formData">
      <template #header>
        <!-- <h2>高级检索</h2> -->
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" style="width: 150px" icon="search" round @click="search"
            >搜索</el-button
          >
          <el-button type="success" style="width: 150px" icon="RefreshRight" round @click="reset"
            >重置</el-button
          >
        </div>
      </template>
    </kl-form>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  padding: 15px;
  // background-color: #fff;
}
.footer {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
}
</style>
