<template>
  <div>
    <span>Hallo world</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.$net('/test').then(res => {
      console.log(res)
    })
  },
  methods: {}
}
</script>

<style scoped lang="sass">
</style>
