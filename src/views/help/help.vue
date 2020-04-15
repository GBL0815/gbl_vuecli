<template>
  <div class="help">
    <HelloWorld msg="gblcli" />
    <li>{{dateTime}}</li>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'help',
  components: { HelloWorld },
  data () {
    return {
      dateTime: this.$utils.getNowDate(0)
    }
  },
  created () {
    this.$net.get('/test').then(res => {
      if (res !== 'error') {
        console.log('请求成功')
      }
    })
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
