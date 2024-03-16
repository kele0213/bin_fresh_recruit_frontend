/*
 * @Description: 企业信息相关接口
 */
import httpService from '..'
import type {Idata} from '../type'
import {InfoCompanyRequest, InfoCompanyVo, UpdateCompanyRequest, UpdateCompanyVo} from "@/service/company/type";

/**
 * @description: 修改岗位信息
 */
export function updateCompanyInfo(data: UpdateCompanyRequest) {
    return httpService.post<Idata<UpdateCompanyVo>>({
        url: "/com/info/update",
        data
    })
}

/**
 * @description: 查询企业信息
 */
export function getCompanyInfo(data: InfoCompanyRequest) {
    return httpService.get<Idata<InfoCompanyVo>>({
        url: "/com/info/one",
        query:data
    })
}