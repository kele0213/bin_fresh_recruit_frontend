/*
 * @Description: 企业招聘方接口相关数据
 */

// 修改企业信息请求参数
export interface UpdateCompanyRequest {
  com_phone: string
  com_name: string
  com_intro: string
  com_address: string
  com_num: string
  com_type: string
  com_work_time: string
  com_set_time: string
  com_welfare: string
}

// 修改企业信息响应
export interface UpdateCompanyVo {
  com_id: string
  com_name: string
  com_phone: string
  com_intro: string
  com_address: string
  com_num: string
  com_type: string
  com_work_time: string
  com_set_time: string
  com_welfare: string
}

// 查询企业信息请求参数
export interface InfoCompanyRequest {
  com_id: string
}

// 查询企业信息响应
export interface InfoCompanyVo {
  com_id: string
  com_name: string
  com_phone: string
  com_intro: string
  com_address: string
  com_num: string
  com_type: string
  com_work_time: string
  com_set_time: string
  com_welfare: string
  a_avatar: string
}

// 岗位相关信息响应
export interface JobInfoVo {
  job_id: string
  com_id: string
  job_name: string
  job_type: string
  job_intro: string
  job_require: string
  job_pay: string
  create_time: string
}

// 新增岗位信息请求参数
export interface AddJobRequest {
  job_name: string
  job_type: string
  job_intro: string
  job_require: string
  job_pay: string
}

// 修改岗位信息请求参数
export interface UpdateJobRequest {
  job_name: string
  job_type: string
  job_intro: string
  job_require: string
  job_pay: string
}

// 岗位列表请求参数
export interface ListJobRequest {
  com_id: string
  current: number
  page_size: number
  search_content: string
}

// 岗位列表响应
export interface ListJobRequestVo {
  list: JobInfoVo[]
  total: number
  current: number
  page_size: number
}

// 删除岗位信息请求参数
export interface DeleteJpbRequest {
  job_id: string
}

// 简历筛选请求参数
export interface FilrateRequest {
  user_id: string
  job_id: string
  send_state: number
}

// 简历筛选响应
export interface FilrateVo {
  user_id: string
  resume_id: string
  user_name_link: string
  resume_name: string
  create_time: string
  update_time: string
}

// 查看应届生投递记录请求参数
export interface FreshSendListRequest {
  current: number
  page_size: number
  send_status: number
}

// 投递记录信息
export interface FreshSendInfo {
  user_id: string
  com_id: string
  job_id: string
  resume_id: string
  user_name: string
  job_name: string
  user_name_link: string
  resume_name: string
  send_state: number
  create_time: string
}

// 查看应届生投递记录响应
export interface FreshSendListVo {
  list: FreshSendInfo[]
  total: number
  current: number
  page_size: number
}
