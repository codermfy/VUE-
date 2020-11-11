<template>
  <div id="app">
		<h1>--------------APP内容：modules中的内容-------------</h1>
		<h2>{{$store.state.a.name}}</h2>
		<button @click="updatename()">修改名字</button>
		<button @click="$store.dispatch('aUpdateName')">modules中异步更新</button>
		<h2>{{$store.getters.fullname}}</h2>
		<h2>{{$store.getters.fullname2}}</h2>
		<h2>{{$store.getters.fullname3}}</h2>
		<h1>--------------APP组件内容-------------</h1>
    <h2>{{message}}</h2>
		<h2>{{$store.state.counter}}</h2>
		<button @click="add">+</button>
		<button @click="sub">-</button>
		<button @click="addCount(5)">+5</button>
		<button @click="addCount(10)">+10</button>
		<button @click="addStu">加学生</button>
		<h2>判断响应式操作</h2>
		<button @click="syncupdate">同步更新</button>
		<button @click="asyncupdate">异步更新</button>
		<h4>{{$store.state.student}}</h4>
		<h1>--------------APP内容：getter相关信息-------------</h1>
		<h2>{{$store.getters.powerCounter}}</h2>
		<h2>{{$store.getters.getOlderStu}}</h2>
		<h2>{{$store.getters.getOlderStuLength}}</h2>
		<h2>{{$store.getters.getAgeOldStu(40)}}</h2>
		<h1>--------------view1组件内容-------------</h1>
		<view1></view1>
  </div>
</template>

<script>
	import view1 from './components/view1.vue'
	import {INCREMENT,DECREMENT,INCREMENTCOUNT,ADDSTUDENT,UPDATE} from './store/mutation-types.js'
export default {
  name: 'App',
	data(){
		return {
			message:'APP组件'
		}
	},
	methods:{
		add(){
			this.$store.commit(INCREMENT)
		},
		sub(){
			this.$store.commit(DECREMENT)
		},
		addCount(count){
			//payload 负载，传入的参数
			//1.普通的提交封装：对应函数payload参数取到的是一个数字
			// this.$store.commit('incrementCount',count)
			//2.特殊的提交封装,对应函数payload参数取到的是一个对象
			this.$store.commit({
				type:INCREMENTCOUNT,
				count:count
			})
		},
		addStu(){
			const stu={id:5,name:'alan',age:30}
			this.$store.commit(ADDSTUDENT,stu)
		},
		syncupdate(){
			this.$store.commit(UPDATE)
		},
		asyncupdate(){
			// this.$store.dispatch('acUpdate','我是携带的信息')
			this.$store.dispatch('acUpdate','我是携带的信息').then( res =>{
				console.log(res)
				console.log('处理解决完的传回来的数据')
			})
		},
		updatename(){
			this.$store.commit('updateName','lisi')
		}
	},
	components:{
		view1
	}
}
</script>

<style>

</style>
