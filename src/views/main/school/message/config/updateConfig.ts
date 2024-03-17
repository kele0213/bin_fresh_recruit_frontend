import type { IFormConfig } from '@/components/base/form/type/type'
const updateConfig: IFormConfig = {
  title: '修改资讯',
  labelWidth: '70px',
  styleLayout: {
    padding: '10px 20px'
  },
  itemLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'title', //v-model绑定字段
      type: 'textarea',
      label: '标题',
      placeholder: '请输入标题，不超过16个字',
      others: {
        rows: 1
      }
    },
    {
      field: 'intro_content', //v-model绑定字段
      type: 'textarea',
      label: '内容',
      placeholder: '请输入资讯内容，不超过2000个字',
      others: {
        rows: 15
      }
    }
  ]
}

export default updateConfig
