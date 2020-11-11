
//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//router懒加载，build后根据router定组件分成多个JS文件，用户不需要一次请求所有文件导致时间过长出现空白
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')
const routes = [
	{
		path:'',
		//redirect重定向
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home,
		meta:{
			title:'首页'
		},
		children:[
			// {
			// 	path:'',
			// 	redirect:'news'
			// },
			{
				path:'news',
				component:HomeNews
			},
			{
				path:'message',
				component:HomeMessage
			}
		]
	},
	{
		path:'/about',
		component:About,
		meta:{
			title:'关于'
		},
		beforeEnter:(to,from,next)=>{
			// console.log("路由守卫")
			next()
		}
	},
	{
		path:'/user/:userId',
		component:User,
		meta:{
			title:'我的'
		},
	},
	{
		path:'/profile',
		component:Profile,
		meta:{
			title:'档案'
		},
	}
]
//2.创建VueRouter对象
const router = new VueRouter({
	//配置路由和组件之间的应用关系
	routes,
	//使用history模式，不会出现# 
	mode:'history',
	//改变被点击中的元素class的名字
	// linkActiveClass:"active"
	
})
//导航守卫 👇全局守卫
//前置守卫（guard）
router.beforeEach((to,from,next)=>{
	//从from跳到to
	document.title=to.matched[0].meta.title
	next()
	// console.log('111')
})
//后置钩子（hook）
router.afterEach((to,from)=>{
	// console.log('222')
})
//阻止重复路径报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
//3.将router对象传入到Vue实例

export default router