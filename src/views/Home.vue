<template>
  <div class="home">
    <router-link to="/help">help</router-link>
    <div>{{ testStore }}</div>
    <img src="@/assets/test.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      testStore: this.$store.state.home.test
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
</style>
