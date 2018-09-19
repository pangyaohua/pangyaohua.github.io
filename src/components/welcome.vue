<template>
	<div class="welcome" v-if="isShow">
		<img src="../assets/images/welcome.jpg" alt="" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				imgSrc:require("../assets/images/welcome.jpg")
			}
		},
		mounted(){
			setTimeout(() => {
				this.isShow=false;
			},1000)
		}
	}
</script>

<style>
	.welcome{
		width:100%;
		height:100%;
		background:#fff;
		position:fixed;
		top:0;
		right:0;
		z-index:10;
		animation:welcome 0.5s;
		transition: 0.5s;
		-webkit-transition:0.5s;
	}
	.welcome img{
		width:100%;
		height:100%;
	}
</style>