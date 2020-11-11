import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
//runtime-only(1.性能更高 2.代码量更少)
//render -> vdom -> UI

//.vue文件中的template是由谁处理的
//vue-template-compiler