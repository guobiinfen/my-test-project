
//引入首页
import index from "@/views/index.vue";
import menuPage from "../Router/menuPage";

export const rootPage={
  path:'/',
  name:'root',
  redirect: 'index',
}
export const indexPage={
  path:'/index',
  name:'index',
  meta:{
    title:'首页'
  },
  component:index

}
export const login={
  path:'/login',
  name:'login',
  meta:{
    title:'登录'
  },
  // component:index

}

export const menuRouter=menuPage


export const routes=[
  rootPage,
  indexPage,
  login,
  ...menuRouter
]