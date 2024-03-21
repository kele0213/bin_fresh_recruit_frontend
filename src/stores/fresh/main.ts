// 主页
import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {GetRecommendListRequest} from "@/service/fresh/type";
import {getJobListByHttp} from "@/service/fresh/request";

export const useMainStore = defineStore('freshMain', () => {
    const recommendResult = ref()
    const reqData = ref<GetRecommendListRequest>({
        limit: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
        is_recommend: 0 // 0-否 1-是
    })
    // 推荐的岗位
    const getRecommendList = async () => {
        const res = await getJobListByHttp(reqData.value);
        if (res.code === 0) {
            recommendResult.value = res.data
        }
    }
    return {recommendResult,getRecommendList}
})
