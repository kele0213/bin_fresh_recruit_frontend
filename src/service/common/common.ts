import httpService from "@/service";
import type {Idata} from "@/service/type";

export function getDict(dict_type:number){
    return httpService.get<Idata<String[]>>({
        url:'/dict/get',
        params:{
            dict_type
        }
    })
}