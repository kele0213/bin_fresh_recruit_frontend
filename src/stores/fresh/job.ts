// 岗位信息
import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {GetJobListRequest} from "@/service/fresh/type";
import router from "@/router";
import {getJobInfoOneHttp, getJobListBySearchHttp} from "@/service/fresh/request";
import type {GetJobInfoOneRequest} from "@/service/fresh/type";
import localCache from "@/utils/localCache";
import type {InfoCompanyRequest} from "@/service/company/type";
import {getCompanyInfo} from "@/service/company/companyInfo";

export const useJobStore = defineStore('freshJob', () => {
    // 岗位搜索
    const jobSearchResult = ref()
    const count = ref(100)
    const pageSize = ref(100)
    const searchContent = ref<GetJobListRequest>({
        com_address: "", com_num: "", com_type: "", job_type: "", search_content: "",
        current: 1,
        page_size: 24
    })

    // 搜索岗位
    const searchJob = async function () {
        const res = await getJobListBySearchHttp(searchContent.value)
        if (res.code === 0) {
            jobSearchResult.value = res.data.list
            count.value = res.data.total
            pageSize.value = res.data.page_size
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

    // 岗位信息
    const jobInfoResult = ref()

    const changeJobId = (data: string) => {
        localCache.setCache("job_id", data)
    }
    const jobInfo = async () => {
        const request = ref<GetJobInfoOneRequest>({
            job_id: localCache.getCache("job_id")
        })
        const res = await getJobInfoOneHttp(request.value);
        if (res.code === 0) {
            jobInfoResult.value = res.data
        }
    }


    const companyInfo = ref()
    const getCompany = async () => {
        const request = ref<InfoCompanyRequest>({
            com_id: localCache.getCache("com_id")
        })
        const res = await getCompanyInfo(request.value)
        if (res.code === 0) {
            companyInfo.value = res.data
        }
    }
    // 改变搜索
    const changeComId = (data: any) => {
        localCache.setCache("com_id", data)
    }

    return {
        searchContent,
        jobSearchResult,
        count,
        pageSize,
        jobInfoResult,
        companyInfo,
        searchJob,
        saveSearchContent,
        saveSearch,
        changeCurrent,
        changeJobId,
        jobInfo,
        changeComId,
        getCompany
    }
})
