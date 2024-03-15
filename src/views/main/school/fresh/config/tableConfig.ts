import type { ItableConfig } from '@/components/base/kl-table'
export const tableConfig: ItableConfig = {
    isShowIndex: true,
    isShowSelect: true,
    title: '应届生列表',
    propList: [
        { field: 'userID', label: '账号ID', minWidth: '120', slotName: 'userID' },
        { field: 'userName', label: '姓名', minWidth: '120', slotName: 'userName' },
        { field: 'userSex', label: '性别', minWidth: '120', slotName: 'userSex' },
        { field: 'userPhone', label: '手机号', minWidth: '120', slotName: 'userSex' },
        { field: 'userEmail', label: '邮箱', minWidth: '120', slotName: 'userSex' },
        { field: 'userMajor', label: '专业', minWidth: '120', slotName: 'userSex' },
        { label: '操作', width: '300', slotName: 'handler' }
    ]
}

export const tableData = [
    {
        name: '小明',
        age: '18',
        create_time: '2024-03-13T08:03:23.000+00:00'
    },
]
