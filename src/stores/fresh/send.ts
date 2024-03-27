// 投递
import {defineStore} from 'pinia'
import {freshSendResumeHttp} from "@/service/fresh/request";
import {showBox, showMsg} from "@/utils/message";

export const useSendStore = defineStore('freshSend', () => {
    // 投递简历
    const sendResume = async (data: any) => {
        const res = await freshSendResumeHttp({
            com_id: data.com_id,
            job_id: data.job_id,
            resume_id: data.resume_id
        })
        if (res.code === 0) {
            showMsg("投递成功，请前往个人中心查看进度", "success")
        } else if (res.code === 4019) {
            showBox("投递失败","投递进度在流程中，请勿重复投递")
        } else {
            showMsg("投递失败，请重试", "error")

        }
    }
    return {sendResume}
})
