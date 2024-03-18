import type {IFormConfig} from '@/components/base/form/type/type'

import {useCommonStore} from "@/stores/common/common";
import {storeToRefs} from 'pinia'

const commonStore = useCommonStore()
const {getdict} = commonStore
const {dictData} = storeToRefs(commonStore)

await getdict(5);
const dicts = []
dictData.value.forEach((item, index) => {
    dicts.push({
        label: item,
        value: index
    })
})


const modalConfig: IFormConfig = {
    title: '修改投递状态',
    labelWidth: '100px',
    styleLayout: {
        padding: '2px 20px'
    },
    itemLayout: {
        span: 24
    },
    formItems: [
        {
            field: 'send_state',
            type: 'select',
            label: '投递状态',
            placeholder: '请选择投递状态',
            options: dicts
        },
    ]
}

export default modalConfig
