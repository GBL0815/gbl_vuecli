<template>
  <div class="home">
    <router-link to="/help">help</router-link>
    <div>{{ testStore }}</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      testStore: this.$store.state.home.test
    }
  },
  created: function () {},
  mounted: function () {},
  methods: {}
}
</script>

<style scoped lang="less">
</style>
