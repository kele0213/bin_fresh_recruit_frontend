import type {IFormConfig} from '@/components/base/form/type/type'

import {useCommonStore} from "@/stores/common/common";
import {storeToRefs} from 'pinia'

const commonStore = useCommonStore()
const { getdict } = commonStore
const { dictData } = storeToRefs(commonStore)

await getdict(1);
const dicts = []
for(const item of dictData.value){
    dicts.push({
        label:item,
        value:item
    })
}


const modalConfig: IFormConfig = {
    title:'修改岗位信息',
    labelWidth: '100px',
    styleLayout: {
        padding: '2px 20px'
    },
    itemLayout: {
        span: 24
    },
    formItems: [
        {
            field: 'job_name', //v-model绑定字段
            type: 'input',
            label: '岗位名称',
            placeholder: '请输入岗位名称'
        },
        {
            field: 'job_type',
            type: 'select',
            label: '岗位类别',
            placeholder: '请选择岗位列表',
            options: dicts
        },
        {
            field: 'job_intro',
            type: 'textarea',
            label: '岗位介绍',
            placeholder: '请输入岗位介绍',
            others: {
                rows: 6
            }
        },
        {
            field: 'job_require',
            type: 'textarea',
            label: '岗位职责',
            placeholder: '请输入岗位职责',
            others: {
                rows: 6
            }
        },
        {
            field: 'job_pay',
            type: 'input',
            label: '岗位薪资',
            placeholder: '请输入岗位薪资'
        },
    ]
}

export default modalConfig
