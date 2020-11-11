import Vue from 'vue'

import Vuex from 'vuex'

import {INCREMENT,DECREMENT,INCREMENTCOUNT,ADDSTUDENT,UPDATE} from './mutation-types.js'

Vue.use(Vuex)

const moduleA={
	state:{
		name:"zhangsan"
		},
	mutations:{
		updateName(state,payload){
			state.name=payload
		}
	},
	actions:{
		aUpdateName(context){
			setTimeout(()=>{
				context.commit('updateName','wangwu')
			},1000)
		},
		//把context对象中想用的属性取出来，
		//对象的解构 ES6语法
		what({commit,dispatch,state}){
			//
		}
	},
	getters:{
		fullname(state){
			return state.name+'11111'
		},
		fullname2(state,getter){
			return getter.fullname +'22222'
		},
		fullname3(state,getter,rootState){
			return getter.fullname2 + rootState.counter
		}
	}
}

const moduleB={
	state:{},
	mutations:{},
	actions:{},
	getters:{}
}

const store=new Vuex.Store({
	state:{
		counter:1000,
		student:[
			{id:1,name:'mfy',age:10},
			{id:2,name:'xjj',age:30},
			{id:3,name:'hxt',age:40},
			{id:4,name:'clq',age:50},
		]
	},
	mutations:{
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
	},
	actions:{
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
		
	},
	getters:{
		//类似计算属性
		powerCounter(state){
			return state.counter*state.counter
		},
		getOlderStu(state){
			return state.student.filter(stu =>stu.age>20)
		},
		getOlderStuLength(state,getters){
			return getters.getOlderStu.length
		},
		getAgeOldStu(state){
			// return function(age){
			// 	return state.student.filter(stu =>stu.age>age)
			// }
			return age =>{
				return state.student.filter(stu =>stu.age>age)
			}
		}
	},
	modules:{
		//modules最终放在state中
		a:moduleA,
		b:moduleB
	}
})

export default store
