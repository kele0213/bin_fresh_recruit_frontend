import type { IFormConfig } from '@/components/base/form/type/type'

import { useCommonStore } from '@/stores/common/common'
import { storeToRefs } from 'pinia'

const commonStore = useCommonStore()
const { getdict } = commonStore
const { dictData } = storeToRefs(commonStore)

const getDictFn = async (num: number, array) => {
  const res = await getdict(num)
  array.value = res
}

await getdict(4)
const dictsDeucation = []
for (const item of dictData.value) {
  dictsDeucation.push({
    label: item,
    value: item
  })
}

const dictSex = [
  { label: '男', value: '男' },
  { label: '女', value: '女' }
]

const modalConfig: IFormConfig = {
  title: '修改个人信息',
  labelWidth: '100px',
  styleLayout: {
    padding: '2px 20px'
  },
  itemLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'user_name', //v-model绑定字段
      type: 'input',
      label: '用户昵称',
      placeholder: '请输入用户昵称'
    },
    {
      field: 'user_sex',
      type: 'select',
      label: '性别',
      placeholder: '请选择性别',
      options: dictSex
    },
    {
      field: 'user_phone', //v-model绑定字段
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号'
    },
    {
      field: 'user_email', //v-model绑定字段
      type: 'input',
      label: '邮箱',
      placeholder: '请输入邮箱地址'
    },
    {
      field: 'user_school', //v-model绑定字段
      type: 'input',
      label: '学校',
      placeholder: '请输入学校名称'
    },
    {
      field: 'user_major', //v-model绑定字段
      type: 'input',
      label: '专业',
      placeholder: '请输入专业'
    },
    {
      field: 'user_year', //v-model绑定字段
      type: 'input',
      label: '毕业年份',
      placeholder: '请输入毕业年份'
    },
    {
      field: 'user_education',
      type: 'select',
      label: '学历',
      placeholder: '请选择学历',
      options: dictsDeucation
    }
  ]
}

export default modalConfig
