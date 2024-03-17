import type { ItableConfig } from '@/components/base/kl-table'

export const tableConfig: ItableConfig = {
  isShowIndex: true,
  isShowSelect: true,
  title: '资讯列表',
  propList: [
    { field: 'title', label: '标题', minWidth: '120', slotName: 'title' },
    { field: 'intro_content', label: '资讯内容', minWidth: '300', slotName: 'introContent' },
    { field: 'create_time', label: '创建时间', minWidth: '110', slotName: 'createAt' },
    { label: '操作', width: '200', slotName: 'handler' }
  ]
}
