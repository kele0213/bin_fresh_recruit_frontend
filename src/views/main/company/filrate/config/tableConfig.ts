import type { ItableConfig } from '@/components/base/kl-table'

export const tableConfig: ItableConfig = {
  isShowIndex: true,
  title: '投递记录列表',
  propList: [
    { field: 'user_name', label: '应聘者', minWidth: '80', slotName: 'userName' },
    { field: 'job_name', label: '岗位名称', minWidth: '80', slotName: 'jobName' },
    { field: 'resume_name', label: '简历名称', minWidth: '200', slotName: 'resumeName' },
    { field: 'user_name_link', label: '简历附件链接', minWidth: '100', slotName: 'userNameLink' },
    { field: 'send_state', label: '投递状态', minWidth: '50', slotName: 'sendState' },
    { field: 'create_time', label: '投递时间', minWidth: '120', slotName: 'createAt' },
    { label: '操作', width: '150', slotName: 'handler' }
  ]
}
