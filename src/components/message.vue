<template>
	<div class="message">
		<dl v-for="message in messageList" :class="message.className">
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
	</div>
</template>

<script>
	export default{
		mixins:[window.mixin],
		"name":"message",
		data(){
			return{
				pageName:"消息",
				messageList:this.$store.state.messageList
			}
		},
		methods:{
			
		},
		computed:{
			
		}
	}
</script>

<style>
</style>