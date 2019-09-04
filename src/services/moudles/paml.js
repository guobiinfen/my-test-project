import {request} from '../api.js'
//分模块开发。不要混在一起
export default{
    project:{
        list:request('请求地址'),
        create:request('请求地址')
    }
}