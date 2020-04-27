<template>
	<view class="help">
		<li>{{dateTime}}</li>
	</view>
</template>

<script>
	export default {
		name: 'help',
		data () {
			return {
				dateTime: this.$utils.getNowDate(0)
			}
		},
		mounted () {
			this.$net('/test').then(res => {
				console.log(res, '请求成功')
			})
		}
	}
</script>

<style>
</style>
