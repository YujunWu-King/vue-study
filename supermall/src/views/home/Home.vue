<template>
	<div id='home'>
		<nav-bar  class='home-nav'>
			<div slot='center'>购物车</div>
		</nav-bar>

		<ban-ner :sliders='banner'></ban-ner>
		<recommend-view :recommends='recommends'></recommend-view>
		<tab-control :titles='titles'></tab-control>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import BanNer from 'components/common/banner/BanNer'
	import RecommendView from './childComps/HomeRecommendView'
	import {getHomeMultidata} from 'network/home'

	import TabControl from 'components/content/tabControl'
	export default {
		name:'Home',
		components:{
			BanNer,
			RecommendView,
			NavBar,
			TabControl
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
					this.recommends = res.data.recommend.list;
					console.log(this.recommends)
				},err =>{

				})
		},
		data(){
			return {
				banner:[],
				dKeyword:[],
				keywords:[],
				recommends:[],
				titles:['流行','新款','精选']
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