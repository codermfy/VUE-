import {INCREMENT,DECREMENT,INCREMENTCOUNT,ADDSTUDENT,UPDATE} from './mutation-types.js'
export default {
		//actions类似于mutations，用于进行异步操作
		//context:上下文 类似于store
		acUpdate(context,payload){
			// setTimeout(()=>{
			// 	context.commit(UPDATE)
			// 	console.log(payload)
			// },1000)
			//处理完数据给外面回调，在APP.vue里面加then
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					context.commit(UPDATE)
					console.log(payload)
					resolve('我已解决问题')
				},1000)
			})
		}
		
	}