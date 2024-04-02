import type {IFormConfig} from '@/components/base/form/type/type'
import {useCommonStore} from '@/stores/common/common'
import {storeToRefs} from 'pinia'

const commonStore = useCommonStore()
const {getdict} = commonStore
const {dictData} = storeToRefs(commonStore)

const getDictFn = async (num: number, array) => {
    const res = await getdict(num)
    array.value = res
}

const dicts = []
getDictFn(5, dicts).then()
dictData.value.forEach((item, index) => {
    dicts.push({
        label: item,
        value: index
    })
})

const searchConfig: IFormConfig = {
    labelWidth: '120px',
    labelSize: '18px',
    styleLayout: {
        padding: '10px 40px'
    },
    itemLayout: {
        span: 12
    },
    formItems: [
        {
            field: 'send_status', //v-model绑定字段
            type: 'select',
            label: '投递状态',
            placeholder: '请选择投递状态',
            options: dicts
        },
        {
            field: 'job_name', //v-model绑定字段
            type: 'input',
            label: '搜索内容',
            placeholder: '请输入搜索内容'
        }
    ]
}

export default searchConfig
