<template>
	<div>
		<p>我是Home</p>
		<router-link to='/home/news'>新闻</router-link>
		<router-link to='/home/message'>消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:"Home",
		data(){
			return{
				path:'/home/news'
			}
		},
		// created(){
		// 	document.title="首页"
		// }
		created(){
			console.log("Home created")
		},
		destroyed(){
			console.log("Home destroyed")
		},
		//activated和deactivited这两个函数，只有组件保持了keep-alive时，才是有效的
		activated(){
			this.$router.push(this.path)
		},
		//在beforeRouteLeave中记录离开时的路径
		beforeRouteLeave (to,from,next){
			// console.log(this.$route.path)
			// console.log(from.path)
			this.path=this.$route.path
			// this.path=from.path
			
			next()
		}
	}
</script>

<style scoped>
</style>
