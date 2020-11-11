import Vue from 'vue'

import Vuex from 'vuex'

import {INCREMENT,DECREMENT,INCREMENTCOUNT,ADDSTUDENT,UPDATE} from './mutation-types.js'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA.js'


Vue.use(Vuex)

const state ={
		counter:1000,
		student:[
			{id:1,name:'mfy',age:10},
			{id:2,name:'xjj',age:30},
			{id:3,name:'hxt',age:40},
			{id:4,name:'clq',age:50},
		]
	}
	
const store=new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules:{
		//modules最终放在state中
		a:moduleA
	}
})

export default store
