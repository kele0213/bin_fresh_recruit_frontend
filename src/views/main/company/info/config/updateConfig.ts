import type { IFormConfig } from '@/components/base/form/type/type'

import { useCommonStore } from '@/stores/common/common'
import { storeToRefs } from 'pinia'

const commonStore = useCommonStore()
const { getdict } = commonStore
const { dictData } = storeToRefs(commonStore)

await getdict(6)
const dictsNum = []
for (const item of dictData.value) {
  dictsNum.push({
    label: item,
    value: item
  })
}

await getdict(3)
const dictsType = []
for (const item of dictData.value) {
  dictsType.push({
    label: item,
    value: item
  })
}

const modalConfig: IFormConfig = {
  title: '修改企业信息',
  labelWidth: '100px',
  styleLayout: {
    padding: '2px 20px'
  },
  itemLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'com_name', //v-model绑定字段
      type: 'input',
      label: '企业名称',
      placeholder: '请输入企业名称'
    },
    {
      field: 'com_phone', //v-model绑定字段
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号'
    },
    {
      field: 'com_intro', //v-model绑定字段
      type: 'textarea',
      label: '企业介绍',
      placeholder: '请输入企业介绍',
      others: {
        rows: 1
      }
    },
    {
      field: 'com_address', //v-model绑定字段
      type: 'textarea',
      label: '企业地址',
      placeholder: '请输入企业地址',
      others: {
        rows: 1
      }
    },
    {
      field: 'com_num',
      type: 'select',
      label: '企业规模',
      placeholder: '请选择企业规模',
      options: dictsNum
    },
    {
      field: 'com_type',
      type: 'select',
      label: '企业类型',
      placeholder: '请选择企业类型',
      options: dictsType
    },
    {
      field: 'com_work_time', //v-model绑定字段
      type: 'input',
      label: '工作时间',
      placeholder: '请输入工作时间'
    },
    {
      field: 'com_set_time', //v-model绑定字段
      type: 'dataPicker',
      label: '成立时间',
      placeholder: '请选择成立时间',
      others: {
        format: 'YYYY-MM-DD'
      }
    },
    {
      field: 'com_welfare', //v-model绑定字段
      type: 'textarea',
      label: '企业福利',
      placeholder: '请输入企业福利',
      others: {
        rows: 1
      }
    }
  ]
}

export default modalConfig
