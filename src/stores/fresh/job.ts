// 岗位信息
import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {GetJobListRequest} from "@/service/fresh/type";
import router from "@/router";

export const useJobStore = defineStore('freshJob', () => {
    // 岗位搜索
    const jobSearchResult = ref()
    const searchContent = ref<GetJobListRequest>({
        current: 1,
        page_size: 10
    })

    // 搜索岗位
    const searchJob = async function () {

    }

    // 保存搜索内容
    const saveSearchContent = function (data: GetJobListRequest) {
        searchContent.value.search_content = data.search_content ?? searchContent.value.search_content
        searchContent.value.job_type = data.job_type ?? searchContent.value.job_type
        searchContent.value.com_type = data.com_type ?? searchContent.value.com_type
        searchContent.value.com_num = data.com_num ?? searchContent.value.com_num
        // router.push("/fresh/search")
    }
    return {searchContent, jobSearchResult, searchJob, saveSearchContent}
})
