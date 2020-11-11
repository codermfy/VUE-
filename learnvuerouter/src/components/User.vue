<template>
	<div>
		我是User
		<h2>{{userId}}</h2>
	</div>
</template>

<script>
	export default {
		name:"User",
		computed:{
			userId(){
				return this.$route.params.userId
			}
		},
		created(){
			console.log("User created")
		},
		destroyed(){
			console.log("User destroyed")
		}
		// created(){
		// 	document.title="我的"
		// }
	}
</script>

<style scoped>
</style>
