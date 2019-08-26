import Vue from "vue";
import App from "./App.vue";
import router from "./Router/index";
import store from "./store";
import { Button, Select, Table,TableColumn,Checkbox ,CheckboxGroup} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(iView);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

