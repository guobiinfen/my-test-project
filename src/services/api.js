import {ajax} from '@/js/vue-http-plugin.js'
// import store from ''
// import paml from ''
import {Message} from 'iview'


/**
 * 子组件里这样嗲用this.$api.user.login({需要传递的参数}).then(res=>{}).finnally().catch()
 * this.$api.paml.audio.list().then()
 */
ajax.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么，例如加入token
    if(config.data){
        let objtype=Object.prototype.toString.call(config.data)
        if(objtype=='[object FormData]'){
            // config.data.append('token',store.getters.token)
        }
        if(objtype=='[object Object]'){
            // config.data.token=store.getters.token
        }
    }
    return config;
  })


  export function request (url,setting={method:'post'}){
      return function(data={},config={}){
          //合并参数，优先级config>{url}>settings
          config=Object.assign({},setting,{url},config)
          if(config.method=='get'||config.method=="delete"){
              console.log('111',config.method)
              config.params=data
          }else{
              config.data=data
              console.log('222',config.method)

          }

          return ajax(config).then(res=>{
              if(res.data.success){
                  return res.data
              }else{
                    //这个是后台校验token过期了跳转到登录页
                  if(res.data.statusCode=='1007'){
                      Message.error('重新登录')
                      window.location.href='/#/login'
                  } 
                  return Promise.reject(res.data)
              }
          }).catch(()=>{
              Message.error('请求失败')
          })
      }
  }


  export default{
      //用户管理模块
      user:{
          login:request("/login"),
          logout:request('/logout'),
      },
    //   paml
      
  }