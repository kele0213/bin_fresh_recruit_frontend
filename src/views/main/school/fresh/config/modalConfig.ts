import type { IFormConfig } from '@/components/base/form/type/type'
const modalConfig: IFormConfig = {
  title: '添加应届生数据',
  labelWidth: '70px',
  styleLayout: {
    padding: '10px 20px'
  },
  itemLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'fresh_ids', //v-model绑定字段
      type: 'textarea',
      label: '学号列表',
      placeholder: '请输入学号列表，多个学号以逗号分隔开来，学号不能包含"-"',
      others: {
        rows: 5
      }
    }
  ]
}

export default modalConfig
