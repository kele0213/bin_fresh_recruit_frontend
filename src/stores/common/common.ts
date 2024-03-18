import { defineStore } from 'pinia'
import {getDict} from "@/service/common/common";
import {ref} from 'vue'


export const useCommonStore = defineStore('common', () => {

    const dictData = ref()
    const getdict = async (value:number)=>{
        const res = await getDict(value);
        if(res.code===0){
            dictData.value = res.data
        }
    }

    return {
        dictData,
        getdict
    }
})
