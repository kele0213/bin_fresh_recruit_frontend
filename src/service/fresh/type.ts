/**
 * @description: 应届生相关数据
 */

// 查询岗位信息-单个
export interface GetJobInfoOneRequest {
    job_id: string
}

export interface GetJobInfoOneVo {
    job_id: string
    com_id: string
    job_name: string
    job_type: string
    job_intro: string
    job_require: string
    job_pay: string
    create_time: string
    a_avatar: string
    com_name: string
    com_address: string
}

// 修改个人信息
export interface UpdateUserInfoRequest {
    user_name: string
    user_sex: number
    user_phone: string
    user_email: string
    user_school: string
    user_major: string
    user_year: string
    user_education: string
}

export interface FreshUserInfo {
    id: 1,
    user_id: string
    user_name: string
    user_sex: number
    user_phone: string
    user_email: string
    user_school: string
    user_major: string
    user_year: string
    user_education: string
    a_avatar: string
}

// 查询个人信息
export interface GetFreshUserInfoRequest {
    user_id: string
}

// 简历附件响应
export interface ResumeInfo {
    user_id: string
    resume_id: string
    user_name_link: string
    resume_name: string
    create_time: string
    update_time: string
}

// 删除简历附件 简历附件回显
export interface ResumeRequest {
    resume_id: string
}

// 岗位意向信息
export interface JobPurposeInfo {
    id: number
    user_id: string
    city: string
    job_type: string
    job_pay: string
    create_time: string
    update_time: string
}

// 添加岗位意向
export interface AddJobPurposeRequest {
    num: number
    city: string
    job_type: string
    job_pay: string
}

// 修改岗位意向
export interface UpdateJobPurposeRequest {
    id: number
    city: string
    job_type: string
    job_pay: string
}

// 删除岗位意向 回显
export interface JobPurposeRequest {
    id: number
}

// 岗位投递
export interface ResumeSendInfo {
    id: number
    user_id: string
    com_id: string
    job_id: string
    resume_id: string
    send_time: string
    send_state: number
    create_time: string
    update_time: string
}

// 投递岗位
export interface FreshResumeSendRequest {
    com_id: string
    job_id: string
    resume_id: string
}

// 投递进度列表
export interface FreshSendStatusListRequest {
    current: number
    page_size: number
}

export interface FreshSendStatusListVo {
    user_id: string
    com_id: string
    job_id: string
    resume_id: string
    job_name: string
    com_name: string
    a_avatar: string
    send_state: number
    create_time: string
}

export interface FreshSendStatusPage {
    total: number
    current: number
    page_size: number
    list: FreshSendStatusListVo[]
}

export interface GetJobListRequest {
    search_content?: string
    job_type?: string
    com_type?: string
    com_num?: string
    com_address?: string
    page_size: number
    current: number
}

export interface GetJobListVo {
    list: GetJobInfoOneVo[]
    total: number
    current: number
    page_size: number
}

export interface GetRecommendListRequest {
    limit: number
    is_recommend: number
}