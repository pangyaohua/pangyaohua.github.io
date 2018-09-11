<template>
	<div id="main">
		<!--头部信息-->
		<header-nav></header-nav>

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
	import headerNav from './components/header_nav/header'
	import footerNav from "./components/footer_nav/footer"
	import searchBox from "./components/searchBox/searchBox"
	import mixin from "./vuex/mixin.js"
	window.mixin = mixin
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
			searchBox
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