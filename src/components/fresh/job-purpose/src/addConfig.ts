import type {IFormConfig} from '@/components/base/form/type/type'

import {useCommonStore} from '@/stores/common/common'
import {storeToRefs} from 'pinia'

const commonStore = useCommonStore()
const {getdict} = commonStore
const {dictData} = storeToRefs(commonStore)

await getdict(1)
const dictsJobType = []
for (const item of dictData.value) {
    dictsJobType.push({
        label: item,
        value: item
    })
}

const dictsPayType = []
for (let i = 0; i <= 20; i++) {
    dictsPayType.push({
        label: i + 'K',
        value: i + 'K'
    })
}
dictsPayType.push({
    label: '20K以上',
    value: '20K以上'
})

const modalConfig: IFormConfig = {
    title: '添加岗位意向',
    labelWidth: '100px',
    styleLayout: {
        padding: '2px 20px'
    },
    itemLayout: {
        span: 24
    },
    formItems: [
        {
            field: 'city', //v-model绑定字段
            type: 'input',
            label: '意向城市',
            placeholder: '请输入意向城市'
        },
        {
            field: 'job_type',
            type: 'select',
            label: '岗位类别',
            placeholder: '请选择岗位类别',
            options: dictsJobType
        },
        {
            field: 'job_pay_start', //v-model绑定字段
            type: 'select',
            label: '期望起始月薪',
            placeholder: '请选择起始月薪',
            options: dictsPayType
        },
        {
            field: 'job_pay_end', //v-model绑定字段
            type: 'select',
            label: '期望起始月薪',
            placeholder: '请选择起始月薪',
            options: dictsPayType
        },
    ]
}

export default modalConfig
