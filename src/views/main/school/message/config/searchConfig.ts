import type { IFormConfig } from '@/components/base/form/type/type'
const searchConfig: IFormConfig = {
  labelWidth: '150px',
  labelSize: '20px',
  styleLayout: {
    padding: '10px 40px'
  },
  itemLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'search_content', //v-model绑定字段
      type: 'input',
      label: '搜索内容',
      placeholder: '请输入搜索内容'
    }
  ]
}

export default searchConfig
