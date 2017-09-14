<template>
	<!-- <div class="mask" :class="{'active': isActive}">
		<h1>loading...</h1>
	</div> -->
</template>

<script>
	export default{
		name: 'mask-view',
		data: function(){
			return {
				isActive: false
			}
		},
		mounted(){
			this.isActive = this.$store.state.mask_active;
		},
		methods: {
			show(){
				this.isActive = true;
			},
			hide(){
				this.isActive = !1;
			}
		}
	}
</script>

<style>
	.mask{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.7);
		color: #fff;
	}
</style>