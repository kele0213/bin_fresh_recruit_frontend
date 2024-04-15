import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {
    AddJobRequest,
    DeleteJpbRequest,
    ListJobRequest,
    UpdateJobRequest
} from '@/service/company/type'
import {addJobInfo, batchAddJob, deleteJobInfo, listJobInfo, updateJobInfo} from '@/service/company/jobInfo'
import {showMsg} from '@/utils/message'
import Form from "@/components/base/form";

export const useJobStore = defineStore('job', () => {
    // 岗位列表
    const jobList = ref()
    const count = ref(100)
    const pageSize = ref(100)
    const reqData = ref<ListJobRequest>({
        com_id: '',
        current: 1,
        page_size: 6,
        search_content: ''
    })
    // 改变搜索条件和id
    const changeData = async (data: any) => {
        reqData.value.com_id = data['com_id']
        reqData.value.search_content = data['search_content']
    }
    // 修改分页数据
    const changeCurrent = (current: number) => {
        reqData.value.current = current
    }
    //  获取job列表
    const getJobList = async () => {
        const res = await listJobInfo(reqData.value)
        if (res.code === 0) {
            jobList.value = res.data.list
            count.value = res.data.total
            pageSize.value = res.data.page_size
        }
    }
    // 添加岗位
    const addJob = async (data: AddJobRequest) => {
        const res = await addJobInfo(data)
        if (res.code === 0) {
            showMsg('添加成功', 'success')
            await getJobList()
        } else {
            showMsg('添加失败', 'error')
        }
    }
    // 删除岗位
    const deleteJob = async (data: DeleteJpbRequest) => {
        const res = await deleteJobInfo(data)
        if (res.code === 0) {
            showMsg('删除成功', 'success')
            await getJobList()
        } else {
            showMsg('删除失败', 'error')
        }
    }
    // 编辑岗位
    const updateJob = async (data: UpdateJobRequest) => {
        const res = await updateJobInfo(data)
        if (res.code === 0) {
            showMsg('修改成功', 'success')
            await getJobList()
        } else {
            showMsg('修改失败', 'error')
        }
    }

    // 批量上传文件
    const batchAddJobInfo = async (data: FormData) => {
        const res = await batchAddJob(data)
        if (res.code == 0) {
            showMsg("上传并解析成功，最多只处理前200条数据，已忽略包含空值的行", "success")
            await getJobList()
        } else {
            showMsg("解析失败，请重试", "error")
        }
    }
    return {
        jobList,
        reqData,
        count,
        pageSize,
        changeCurrent,
        changeData,
        getJobList,
        addJob,
        deleteJob,
        updateJob,batchAddJobInfo
    }
})
