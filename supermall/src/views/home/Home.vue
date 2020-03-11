<template>
	<div id='home'>
		<nav-bar  class='home-nav'>
			<div slot='center'>购物车</div>
		</nav-bar>
		<div>{{banner}}</div>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import {getHomeMultidata} from 'network/home'
	export default {
		name:'Home',
		components:{
			NavBar
		},
		created(){
			//请求多个数据
			getHomeMultidata().then(
				res =>{
					this.banner = res.data.banner.list;
					this.dKeyword = res.data.dKeyword.list;
					this.keywords = res.data.keywords.list;
					this.recommend = res.data.recommend.list;
				},err =>{

				})
		},
		data(){
			return {
				banner:[],
				dKeyword:[],
				keywords:[],
				recommend:[]
			}
		}
	}
</script>

<style scoped>
	.home-nav{
		background-color:#ff8198;
		color: #fff;
	}
</style>