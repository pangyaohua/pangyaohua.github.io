<template>
	<div class="messagedEATL">
		<div class="message_header">
			<span class="iconfont icon-xiangzuojiantou" @click="back_home">
				
			</span>
			<h1>
				{{$route.params.userId}}
			</h1>
			<i class="iconfont icon-lianxiren">
				
			</i>
			<i class="iconfont icon-iconset0214">
				
			</i>
		</div>
		<div class="message_section">
			<div class="left">
				<dl>
					<dt>
						<img v-bind:src="$route.params.userImg" alt="" />
						
					</dt>
					<dd>
						<p>看撒娇的</p>
						<span>
							阿克苏的哈科技活动看见爱上的空间按时打卡坚实的空间撒谎的空间按时打卡机活动卡较好的卡较好的卡机的
						</span>
					</dd>
				</dl>
			</div>
			<div class="right">
				<dl>

					<dd>
						<p>看撒娇的</p>
						<span>
							阿克苏的哈科技活动看见爱上的空
						</span>
					</dd>
					<dt>
						<img src="../../assets/images/group_06.png" alt="" />
						
					</dt>
				</dl>
			</div>
		</div>
		<div class="message_footer">
			<input type="text" />
			<div class="img_box" @click="open">
				<img src="../../assets/images/message_detail_02.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'messageDetail',
		data() {
			return {

			}
		},
		methods: {

			back_home() {
				//--设置头部可见，且回到上一页
				this.$store.commit('setEnterERJI', true)
				this.$router.go(-1);
			},
			open() {
				this.$message('暂不支持此功能，请稍后');
			}
		},
		//--进行初始化数据，一般用于渲染页面之后请求数据
		created() {
			this.$store.commit('setEnterERJI', false)
		},
		watch: {
			"$route" (to, from) {
				console.log(this.$route.params.userId)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>