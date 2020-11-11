<template>
	<div>
		<p>我是Profile</p>
		<h1>{{$route.query}}</h1>
	</div>
</template>

<script>
	export default {
		name:"Profile",
		created(){
			console.log("Profile created")
		},
		destroyed(){
			console.log("Profile destroyed")
		}
	}
</script>

<style scoped>
</style>
