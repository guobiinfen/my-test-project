//引入home  公共组件，不用写很多子组件
import Home from "@/views/Home.vue";
export default [{
    path:'/home',
    name:'home',
    title:'',
    component:Home,
},{
    path:'/about',
    name:'about',
    title:'',
    component:Home,
    children:[{
        path:'about1',
        name:'about1',
        title:'',
        component:()=>import('@/views/About.vue'),
    }]
},{
    path:'/echarts',
    name:'echarts',
    title:'',
    component:Home,
    children:[{
        path:'echarts1',
        name:'echarts1',
        title:'',
        component:()=>import('@/views/echarts.vue')
    }]
}]