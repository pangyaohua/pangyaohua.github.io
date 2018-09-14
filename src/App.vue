<template>
	<div id="main">
		<!--头部信息-->
		<header-nav></header-nav>
		<!---message页面点击加号显示的添加框-->
		<add-box></add-box>
		<section>
			<!--搜索框-->
			<search-box></search-box>
			<router-view name="default">

			</router-view>
		</section>
		<!--底部导航-->
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	//--引入头部导航--
	import headerNav from './components/header_nav/header'
	//--引入底部导航--
	import footerNav from "./components/footer_nav/footer"
	//--引入搜索框--
	import searchBox from "./components/searchBox/searchBox"
	//--引入mixinjs--
	import mixin from "./vuex/mixin.js"
	window.mixin = mixin
	//--引入点击加号展示的弹出框--
	import addBox from "./components/add_box/add_box"
	
	$(function() {
		console.log("引入jquery成功");
	})
	export default {
		data() {
			return {
				"pageName": "消息"
			}
		},
		components: {
			headerNav,
			footerNav,
			searchBox,
			addBox
		},
		watch: {
			// 监听 $route 为店内页设置不同的过渡效果
			"$route" (to, from) {
				const toDepth = to.path.split("/")
				const fromPath = from.path.split("/")
				console.log(toDepth);
				if(toDepth.length == 2) {
					console.log(to.name);
					this.$store.commit("setPageName",to.name);
				}
			}
		}
	}
</script>

<style>
	@import "assets/css/header_nav.css"
</style>