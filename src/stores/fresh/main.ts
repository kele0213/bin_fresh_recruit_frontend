// 主页
import {defineStore} from 'pinia'
import {ref} from 'vue'
import {GetRecommendListRequest} from "@/service/fresh/type";

export const useMainStore = defineStore('freshMain', () => {
    const recommendResult = ref()
    const reqData = ref<GetRecommendListRequest>({
        limit: 10,
        is_recommend: 1 // 0-否 1-是
    })
    // 推荐的岗位
    return {recommendResult}
})
