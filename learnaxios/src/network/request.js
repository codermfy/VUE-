import axios from 'axios'
//封装
export function request(config){
		//1.创建axios的实例
		const instance =axios.create({
			baseURL:'http://123.207.32.32:8000',
			timeout:5000
		})
		//2.axios的拦截器
		//配置拦截后需要返回配置
		//请求拦截
		// instance.interceptors.request.use(config=>{
		// 	console.log(config)
		// 	//1.config中一些信息不符合服务器的要求
		// 	//2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
		// 	//3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
		// 	return config
		// },err=>{
		// 	console.log(err)
		// })
		//响应拦截
		//数据拦截后需要返回数据
		instance.interceptors.response.use(res =>{
			console.log(res)
			return res.data
		},err =>{
			console.log(err)
		})
		
		//3.发送真正网络请求 instance也是Promise
		return instance(config)
		
	
}
// export function request(config){
// 	return new Promise((resolve,reject)=>{
// 		const instance =axios.create({
// 			baseURL:'http://123.207.32.32:8000',
// 			timeout:5000
// 		})
// 		//发送真正网络请求
// 		instance(config)
// 		.then(res=>{
// 			resolve(res)
// 		})
// 		.catch(err=>{
// 			reject(err)
// 		})
// 	})
// }
// export function request(config){
// 	//1.创建axios的实例
// 	const instance =axios.create({
// 		baseURL:'http://123.207.32.32:8000',
// 		timeout:5000
// 	})
// 	//发送真正网络请求
// 	instance(config.baseConfig)
// 	.then(res=>{
// 		config.success(res)
// 	})
// 	.catch(err=>{
// 		config.faliure(err)
// 	})
// }
// export function request(config,success,faliure){
// 	//1.创建axios的实例
// 	const instance =axios.create({
// 		baseURL:'http://123.207.32.32:8000',
// 		timeout:5000
// 	})
// 	//发送真正网络请求
// 	instance(config)
// 	.then(res=>{
// 		success(res)
// 	})
// 	.catch(err=>{
// 		faliure(err)
// 	})
// }