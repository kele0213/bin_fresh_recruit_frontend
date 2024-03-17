<script setup lang="ts">
import { ref, type PropType } from 'vue'
import type { IFormConfig } from '@/components/base/form/type/type'
import KlForm from '@/components/base/form'

const props = defineProps({
  formConfig: {
    type: Object as PropType<IFormConfig>,
    required: true
  },
  data: {
    type: Object,
    default() {
      return {}
    }
  }
})

// 初始化数据
const formItems = props.formConfig.formItems || []
const baseFormData: any = {}
for (const item of formItems) {
  baseFormData[item.field] = props.data[item.field] ?? ''
}
const formData = ref(baseFormData)

// 可视化
const dialogVisible = ref(false)
defineExpose({
  getVisible() {
    dialogVisible.value = true
  }
})

// 确定
const emit = defineEmits(['confirm'])
const confirm = () => {
  emit('confirm', formData.value)
  dialogVisible.value = false
}
</script>

<template>
  <div class="modal-form">
    <el-dialog v-model="dialogVisible" :title="formConfig.title ?? '编辑数据'" width="600">
      <kl-form v-bind="formConfig" v-model="formData" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
