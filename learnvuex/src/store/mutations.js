import {INCREMENT,DECREMENT,INCREMENTCOUNT,ADDSTUDENT,UPDATE} from './mutation-types.js'

export default {
		//Vuex的store状态的更新唯一方式
		//里面方法必须是同步方法，异步操作监听不到
		//方法
		[INCREMENT](state){
			state.counter++
		},
		[DECREMENT](state){
			state.counter--
		},
		//传入的参数，第二个
		[INCREMENTCOUNT](state,payload){
			// console.log(count)
			state.counter+=payload.count
		},
		[ADDSTUDENT](state,stu){
			state.student.push(stu)
		},
		[UPDATE](state){
			//异步操作,devtools监听不到，这里是异步操作
			// setTimeout(()=>{
			// 	state.student[0].id=1111
			// },1000)
			state.student[0].id=1111
			//下面两个做不到响应式
			// state.student[0].what=15
			// delete state.student[0].id
			//添加属性和删除属性能做到响应式
			// Vue.set(state.student[0],'what',15)
			// Vue.delete(state.student[0],'age')
		}
	}