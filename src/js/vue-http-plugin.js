import axios from 'axios'
axios.defaults.transformRequest=function(obj){
    var str=[]
    for(var p in obj){
        let value=obj[p]
        if(value===undefined){
            continue
        }
        if(typeof value=='object'){
            value=JSON.stringify(value)
        }
        str.push(encodeURIComponent(p)+'='+encodeURIComponent(value))
        return str.join('&')

    }
}
const baseURL= process.env.VUE_APP_BASEURL
// console.log('baseURL',baseURL)
const ajax=axios.create({
    headers:{},
    method:'post',
    timeout:30000,
    baseURL,
    withCredentials:true
})

export {baseURL}
export {ajax}
export default {
    install(Vue){
        Vue.prototype.$ajax=config=>{
            return ajax(config).then(res=>{
                return res.data
            })
        }
    }
}