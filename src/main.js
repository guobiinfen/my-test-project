import Vue from "vue";
//跟组件
import App from "./App.vue";
//路由
import router from "@/Router/index";
//vuex
import store from "@/store/index";
//按需引入element ui 组件
import { Button, Select, Table,TableColumn,Checkbox ,CheckboxGroup} from 'element-ui'
//引入element ui css
import 'element-ui/lib/theme-chalk/index.css'
//引入iview
import iView from 'iview';
//引入iview css
import 'iview/dist/styles/iview.css';
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//引入ajax请求
import api from '@/services/api'
Vue.prototype.$api=api

//注册elelment ui
Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
//注册iview
Vue.use(iView);

//挂载 vue上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

