import type { ItableConfig } from '@/components/base/kl-table'

export const tableConfig: ItableConfig = {
  isShowIndex: true,
  title: '岗位列表',
  propList: [
    { field: 'job_id', label: '岗位ID', minWidth: '120', slotName: 'jobId' },
    { field: 'job_name', label: '岗位名称', minWidth: '100', slotName: 'jobName' },
    { field: 'job_type', label: '岗位类别', minWidth: '120', slotName: 'jobType' },
    { field: 'job_intro', label: '岗位介绍', minWidth: '200', slotName: 'jobIntro' },
    { field: 'job_require', label: '职责要求', minWidth: '200', slotName: 'jobRequire' },
    { field: 'job_pay', label: '岗位薪资', minWidth: '80', slotName: 'jobPay' },
    { field: 'create_time', label: '创建时间', minWidth: '170', slotName: 'createAt' },
    { label: '操作', width: '200', slotName: 'handler' }
  ]
}
