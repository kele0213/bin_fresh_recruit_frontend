// 岗位信息
import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {GetJobListRequest} from "@/service/fresh/type";
import router from "@/router";
import {getJobListBySearchHttp} from "@/service/fresh/request";

export const useJobStore = defineStore('freshJob', () => {
    // 岗位搜索
    const jobSearchResult = ref()
    const count = ref(100)
    const pageSize = ref(100)
    const searchContent = ref<GetJobListRequest>({
        com_address: "", com_num: "", com_type: "", job_type: "", search_content: "",
        current: 1,
        page_size: 12
    })

    // 搜索岗位
    const searchJob = async function () {
        const res = await getJobListBySearchHttp(searchContent.value)
        if (res.code === 0) {
            jobSearchResult.value = res.data.list
            count.value = res.data.total
            pageSize.value=res.data.page_size
        }
    }

    // 保存搜索内容
    const saveSearchContent = async function (data: GetJobListRequest) {
        searchContent.value.search_content = data.search_content
        searchContent.value.job_type = data.job_type
        searchContent.value.com_type = data.com_type
        searchContent.value.com_num = data.com_num
        router.push("/fresh/search")
    }
    // 岗位搜索页面保存搜索内容
    const saveSearch = function (data: GetJobListRequest) {
        searchContent.value.search_content = data.search_content
        searchContent.value.job_type = data.job_type
        searchContent.value.com_type = data.com_type
        searchContent.value.com_num = data.com_num
        searchContent.value.com_address = data.com_address === '全国' ? "" : data.com_address
    }

    // 修改分页数据
    const changeCurrent = (current: number) => {
        searchContent.value.current = current
    }
    return {searchContent, jobSearchResult,count,pageSize, searchJob, saveSearchContent, saveSearch,changeCurrent}
})
