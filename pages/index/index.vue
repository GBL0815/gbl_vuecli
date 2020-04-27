<template>
	<view>
		<navigator url="../help/help" open-type="navigate">
			<text>{{ testStore }}</text>
		</navigator>
		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				testStore: this.$store.state.index.test
			}
		},
		mounted() {
			this.$refs["toast"].open(`${this.testStore}开发中`)
		}
	}
</script>

<style lang="scss">
</style>
