<template>
	<div id="app">
	<!-- 	<router-link to="/home" tag='button' replace active-class="active">首页</router-link>
		<router-link to="/about" replace >关于</router-link> -->
		<!-- <button @click="homeclick">首页</button>
		<button @click="aboutclick">关于</button> -->
		<router-link to="/home">首页</router-link>
		<router-link to="/about">关于</router-link>
<!-- 		<router-link :to="'/user/'+userId">我的</router-link>
		<router-link :to="{path:'/profile',query:{
			name:'why',age:18,height:1.88
		}}">档案</router-link> -->
		<button @click='userClick'>我的</button>
		<button @click="profileClick">档案</button>
		<h2>keep-alive后组件不会频繁创建销毁(排除Profile)</h2>
		<keep-alive exclude="Profile">
		<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return{
			userId:'lisa'
		}
	},
	methods:{
		homeclick(){
			//通过代码的方式修改路由 vue-router
			// this.$router.push('/home');
			this.$router.replace('/home');
		},
		aboutclick(){
			// this.$router.push('/about');
			this.$router.replace('/about');
		},
		userClick(){
			this.$router.push('/user/'+this.userId)
		},
		profileClick(){
			this.$router.push({
				path:'/profile',
				query:{
					name:'why',
					age:18,
					height:1.88
				}
			})
		}
	}
};
</script>

<style>
	.router-link-active{
		color:#f00;
	}
	.active{
		color:#f0f;
	}
</style>
