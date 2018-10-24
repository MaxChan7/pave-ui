import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import Pave from '../packages/index'

// 注册组件库
Vue.use(Pave)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
