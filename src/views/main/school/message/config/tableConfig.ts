import type {ItableConfig} from '@/components/base/kl-table'

export const tableConfig: ItableConfig = {
    isShowIndex: true,
    isShowSelect: true,
    title: '资讯列表',
    propList: [
        {field: 'title', label: '标题', minWidth: '120', slotName: 'title'},
        {field: 'introContent', label: '资讯内容', minWidth: '120', slotName: 'introContent'},
        { field: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
        {label: '操作', width: '300', slotName: 'handler'}
    ]
}

export const tableData = [
    {
        title: '小明',
        introContent: '18',
        create_time: '2024-03-13T08:03:23.000+00:00'
    },
]
