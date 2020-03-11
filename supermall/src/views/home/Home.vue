<template>
	<div id='home'>
		<nav-bar  class='home-nav'>
			<div slot='center'>购物车</div>
		</nav-bar>
		<ban-ner :sliders='banner'></ban-ner>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import BanNer from 'components/common/banner/BanNer'
	import {getHomeMultidata} from 'network/home'
	export default {
		name:'Home',
		components:{
			NavBar,
			BanNer
		},
		created(){
			//请求多个数据
			getHomeMultidata().then(
				res =>{
					this.banner = res.data.banner.list.map(valueMap =>{
						return {img:valueMap.image};
					});
					this.dKeyword = res.data.dKeyword.list;
					this.keywords = res.data.keywords.list;
					this.recommend = res.data.recommend.list;
					console.log(this.banner)
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