// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>',
	render:function(createelement){
		//1.普通用法：createelement("标签"，{标签的属性}，[''])
		// return createelement('h2',
		// {class:'box'},
		// ['hello world',createelement('button',['按钮'])])
		//2.传入组件对象
		return createelement(App)
	}
})

//runtime-compiler
//template -> ast -> render -> vdom -> UI

//runtime-only(1.性能更高 2.代码量更少)
//render -> vdom -> UI