// 简历
import {defineStore} from 'pinia'
import {showBox, showMsg} from "@/utils/message";
import {addResumeHttp, getResumeListHttp} from "@/service/fresh/request";
import {ref} from "vue";

export const useResumeStore = defineStore('freshResume', () => {
    const visible = ref(true)
    const changeVisible = (data: Boolean) => {
        visible.value = data
    }
    // 上传简历附件
    const uploadResume = async (file: any) => {
        // 检查
        const typeArry = ['.pdf', '.doc', '.docx', '.txt']
        const fileSize = file.size
        const fileName = file.name
        const type = fileName.substring(fileName.lastIndexOf('.'))
        const isFile = typeArry.indexOf(type) > -1
        if (fileSize / 1024 / 1024 > 2) {
            showBox("上传失败", "文件最大仅支持2MB，请重新上传")
            return
        } else if (!isFile) {
            showBox("上传失败", "文件仅支持类型为PDF、DOC、DOCX或TXT，请重新上传")
            return
        }
        // 上传
        const formData = new FormData()
        formData.append('file', file.raw)
        formData.append('num', '5')
        formData.append('service_type', '0')
        const res = await addResumeHttp(formData)
        if (res.code === 0) {
            showMsg("上传成功", "success")
        } else if (res.code === 4022) {
            showBox("上传失败", "附件简历数量最大仅支持5份")
        } else {
            showMsg("上传失败，请重试", "error")
        }
    }

    // 简历附件列表
    const resumeList = ref()
    const getResumeList = async () => {
        const res = await getResumeListHttp()
        if (res.code === 0) {
            resumeList.value = res.data
        }
    }
    return {uploadResume, visible, resumeList, getResumeList, changeVisible}
})
