<template>
	<!---message页面点击加号显示的添加框-->
	<div class="add_box_container" v-show="$store.state.IsShow_addBox" @click="$store.commit('setAddBox')">
		<div class="add_box_content">
			<div class="add_box">
				<span class="sanjiao_up"></span>
				<ul>
					<li>
						<i class="iconfont icon-icon_msg"></i>&nbsp; 创建群聊
					</li>
					<li>
						<i class="iconfont icon-lianxirenweixuanzhong"></i>&nbsp; 加好友/群
					</li>
					<li>
						<i class="iconfont icon-iconfontdongtai"></i>&nbsp; 扫一扫
					</li>
					<li>
						<i class="iconfont icon-icon_msg"></i>&nbsp; 面对面快传
					</li>
					<li>
						<i class="iconfont icon-iconfontdongtai"></i>&nbsp; 首付款
					</li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>