<template>
	<div class="message">

		<router-link :to="{name:'messageDetail',params:{userId:message.title,userImg:message.imgSrc}}" v-for="(message,index) in messageList" :key="index">
			<dl :class="message.className">
				<dt>
				<img v-bind:src="message.imgSrc" alt="" />
			</dt>
				<dd>
					<p>
						{{message.title}}
						<span>{{message.time}}</span>
					</p>
					<p>
						{{message.content}}
					</p>
				</dd>
			</dl>
		</router-link>
		<!---->
	</div>
</template>

<script>
	export default {
		mixins: [window.mixin],
		"name": "message",
		data() {
			return {
				pageName: "消息",
				messageList: this.$store.state.messageList
			}
		},
		methods: {

		},
		computed: {

		},
		components: {

		},
	}
</script>

<style>

</style>