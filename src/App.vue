<template>
	<div id="main">
		<welcome></welcome>
		<div class="container">
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
		<transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
			<router-view name="detail" class="detail_erji">

			</router-view>
		</transition>

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
	//引入启动页面
	import welcome from "./components/welcome"
	$(function() {
		console.log("引入jquery成功");
	})
	export default {
		data() {
			return {
				"pageName": "消息",
				"enterAnimate": "",
				"leaveAnimate": ""
			}
		},
		components: {
			headerNav,
			footerNav,
			searchBox,
			addBox,
			welcome
		},
		watch: {
			// 监听 $route 为店内页设置不同的过渡效果
			"$route" (to, from) {

				const toDepth = to.path.split("/");
				const fromDepth = from.path.split("/");

				if(fromDepth.length == 2) {
					this.$store.commit("setPageName", to.name);
				}
				this.enterAnimate = toDepth.length > fromDepth.length ? "animated fadeInRight" : "animated fadeInLeft"
				this.leaveAnimate = fromDepth.length > toDepth.length ? "animated fadeOutLeft" : "animated fadeOutRight"

			}
		}
	}
</script>

<style>
	@import "assets/css/header_nav.css";
	@import "assets/css/animate.css";
</style>