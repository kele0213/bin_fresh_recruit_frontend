import type { ItableConfig } from '@/components/base/kl-table'
export const tableConfig: ItableConfig = {
  isShowIndex: true,
  isShowSelect: true,
  title: '用户列表',
  propList: [
    { field: 'name', label: '姓名', minWidth: '180', slotName: 'name' },
    { field: 'age', label: '年龄', minWidth: '180', slotName: 'age' },
    { field: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { label: '操作', width: '300', slotName: 'handler' }
  ]
}

export const tableData = [
  {
    name: '小明',
    age: '18',
    create_time: '2024-03-13T08:03:23.000+00:00'
  },
  {
    name: '李华',
    age: '17',
    create_time: '2024-03-13T08:03:23.000+00:00'
  }
]
