<script setup lang="ts">
import type { PropType } from 'vue'
import klTable from '@/components/base/kl-table/src/kl-table.vue'
import type { ItableConfig } from '@/components/base/kl-table'
const props = defineProps({
  tableConfig: {
    type: Object as PropType<ItableConfig>,
    required: true
  },
  tableData: {
    type: Array,
    required: true
  }
})
// slot处理
const allSlots = props.tableConfig.propList.filter((item) => {
  if (!item.slotName) return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handler') return false
  return true
})
// emits
const emits = defineEmits(['edit', 'delete', 'add'])
// 新增按钮
const addFn = () => {
  emits('add')
}
// 编辑按钮
const editFn = (value: any) => {
  emits('edit', value)
}
// 删除按钮
const deleteFn = (value: any) => {
  emits('delete', value)
}
</script>

<template>
  <div class="table">
    <klTable :table-data="tableData" v-bind="tableConfig">
      <!-- 顶部按钮处理 -->
      <template #titleHandler>
        <div class="titleHandler">
          <el-button type="primary" @click="addFn()" size="large" icon="Plus">新增数据</el-button>
          <el-button icon="Refresh" circle style="margin-left: 30px" />
        </div>
      </template>
      <!-- 时间处理 -->
      <template #createAt="scoped">
        {{ $filter.formatUTCtoTime(scoped.row.create_time) }}
      </template>
      <template #updateAt="scoped">
        {{ $filter.formatUTCtoTime(scoped.row.update_time) }}
      </template>
      <!-- 按钮处理 -->
      <template #handler="scoped">
        <el-button type="warning" @click="editFn(scoped.row)" icon="Edit">编辑</el-button>
        <el-button type="danger" @click="deleteFn(scoped.row)" icon="Delete">删除</el-button>
      </template>
      <template v-for="item in allSlots" :key="item.field" #[item.slotName!]="scoped">
        <slot :name="item.slotName" :row="scoped.row"></slot>
      </template>
    </klTable>
  </div>
</template>

<style lang="scss" scoped>
.titleHandler {
  margin: 10px;
}
</style>