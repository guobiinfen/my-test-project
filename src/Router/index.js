
import Vue from "vue";
import Router from "vue-router";
//引入路由规则
import {routes} from '@/Router/router'

Vue.use(Router);

//路由配置
const routerConfig={
    routes,
}

console.log('qqqq',routerConfig)
export default new Router(routerConfig);

// {
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes: [
//       {
//         path: "/",
//         name: "index",
//         component: index
//       },
//       {
//         path: "/home",
//         name: "home",
//         component: ()=>import('@/views/Home.vue'),
//         children:{
  
//         }
//       },
//       {
//         path: "/about",
//         name: "about",
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () =>
//           import(/* webpackChunkName: "about" */ "../views/About.vue")
//       },
//       {
//         path: "/echarts",
//         name: "echarts",
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () =>
//           import(/* webpackChunkName: "about" */ "../views/echarts.vue")
//       }
//     ]
//   }
