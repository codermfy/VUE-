export default{
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