<template>
    <tab-bar>
      <tab-bar-item link="/home" activeTextColor="#707070">
        <img slot='item-icon' src="~img/tabbar/home.png">
        <img slot='item-icon-active' src="~img/tabbar/home-active.png">
        <div slot='item-text' >首页</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" activeTextColor="#707070">
        <img slot='item-icon' src="~img/tabbar/cart-full.png">
        <img slot='item-icon-active' src="~img/tabbar/cart-full-active.png">
        <div slot='item-text' >购物车</div>
      </tab-bar-item>
      <tab-bar-item  link="/profile"  activeTextColor="#707070">
        <img slot='item-icon' src="~img/tabbar/me.png">
        <img slot='item-icon-active' src="~img/tabbar/me-active.png">
        <div slot='item-text' >我</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar'
	import TabBarItem from 'components/common/tabbar/TabBarItem'
	export default {
		name:'MainTabBar',
		components: {
	    TabBar,
	    TabBarItem
	  }
	}
</script>

<style>

</style>