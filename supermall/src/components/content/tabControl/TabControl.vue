<template>
	<div class="tab-control">
		<div v-for="title in titles">
			<span>{{title}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>

</style>