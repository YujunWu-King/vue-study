<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name='item-icon'></slot></div>
	 	<div v-else><slot name='item-icon-active'></slot></div>
	 	<div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
	export default {
		name:'TzbBarItem',
		props:{
			link:String,
			activeTextColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return {
			
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.link) != -1
			},
			activeStyle(){
				return this.isActive?{color:this.activeTextColor}:{}
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.link)
			}
		}
	}
</script>

<style>
#tab-bar{
	display: flex;
	background-color: #F6F6F6;

	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;

	box-shadow: 0px -1px 1px rgba(100,100,100,.2);
}
.tab-bar-item{
	flex:1;
	text-align: center;
	height: 49px;
	font-size: 14px;
	color: #bfbfbf;
}
.tab-bar-item img{
	width: 24px;
	height: 24px;
	margin-top: 3px;
	vertical-align: middle;
	margin-bottom: 2px;
}
.active{
	color:red;
}
</style>