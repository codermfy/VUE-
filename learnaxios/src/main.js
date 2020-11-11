import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import axios from 'axios'
//当前都在使用全局的axios和对应的配置在进行网络请求
//基本使用
// axios({
// 	url:'http://123.207.32.32:8000/home/multidata',
// 	method:'get',//默认是get，可以是post
// 	params:{		//个get请求的参数拼接
		
// 	}
// }).then(res =>{
// 	console.log(res);
// })

//axios发送并发请求

// axios.all([
// 	axios({
// 		url:'http://123.207.32.32:8000/home/multidata'
// 	}),
// 	axios({
// 		url:'http://123.207.32.32:8000/home/data',
// 		params:{
// 			type:'sell',
// 			page:1
// 		}
// 	})
// ]).then(res => {
// 	console.log(res)
// })


// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000

// axios.all([
// 	axios({
// 		url:'/home/multidata'
// 	}),
// 	axios({
// 		url:'/home/data',
// 		params:{
// 			type:'sell',
// 			page:1
// 		}
// 	})
// ]).then(axios.spread((res1,res2) =>{  //这样分割数组得到元素也可以
// 	console.log(res1)
// 	console.log(res2)
// })
// )

//4.创建对应的axios实例

// const  instance1=axios.create({
// 	baseURL:'http://123.207.32.32:8000',
// 	timeout:5000
// })


// instance1({
// 	url:'/home/multidata'
// }).then(res =>{
// 	console.log(res)
// })
// instance1({
// 	url:'/home/data',
// 	params:{
// 		type:'sell',
// 		page:1
// 	}
// }).then(res =>{
// 	console.log(res)
// })

//使用封装的网络请求

import {request} from './network/request.js'

// request({
// 	url:'/home/multidata'
// },res => {
// 	console.log(res)
// },err => {
// 	console.log(err)
// })

// request({
// 	baseConfig:{
// 		url:'/home/multidata'
// 	},
// 	success:function(res){
// 			console.log(res)
// 	},
// 	failure:function(err){
// 		console.log(err)
// 	}
// })

request({
	url:'/home/multidata'
}).then(res => {
	console.log(res)
}).catch(err =>{
	console.log(err)
})

