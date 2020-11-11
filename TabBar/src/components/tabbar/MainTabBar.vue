<template>
	<div>
		<tab-bar>
			<TabBarItem path="/home" activeColor="#F7288F">
			<img slot='item-icon' src="~assets/img/tabbar/shouye.svg" alt="">
			<img slot='item-icon-active' src="~assets/img/tabbar/shouye_act.svg" alt="">
			<div slot="item-text">首页</div>
			</TabBarItem>
			<TabBarItem path="/category" activeColor="#F7288F">
				<img slot='item-icon' src="~assets/img/tabbar/fenlei.svg" alt="">
				<img slot='item-icon-active' src="~assets/img/tabbar/fenlei_act.svg" alt="">
				<div slot="item-text">分类</div>
			</TabBarItem>
			<TabBarItem path="/cart" activeColor="#F7288F">
				<img slot='item-icon' src="~assets/img/tabbar/gouwuche.svg" alt="">
				<img slot='item-icon-active' src="~assets/img/tabbar/gouwuche_act.svg" alt="">
				<div slot="item-text">购物车</div>
			</TabBarItem>
			<TabBarItem path="/profile" activeColor="#F7288F">
				<img slot='item-icon' src="~assets/img/tabbar/wode.svg" alt="">
				<img slot='item-icon-active' src="~assets/img/tabbar/wode_act.svg" alt="">
				<div slot="item-text">我的</div>
			</TabBarItem>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/tabbar/TabBar.vue'
	import TabBarItem from 'components/tabbar/TabBarItem.vue'
	export default {
		name:"",
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style scoped>
</style>
