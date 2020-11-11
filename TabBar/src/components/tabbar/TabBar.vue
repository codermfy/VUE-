<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:"TabBar"
	}
</script>

<style scoped>
	.tabbar{
		position: fixed;
		bottom: 0;
		left:0;
		right: 0;
		box-shadow: 0px -1px 1px rgba(100,100,100,.2);
		display: flex;
		background-color: #f6f6f6;
	}

</style>
