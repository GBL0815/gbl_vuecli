<template>
  <div class="help">
    <HelloWorld msg="gblcli" />
    <li>{{dateTime}}</li>
    <ul>{{date}}</ul>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import net from '@/net/home.js'

export default {
  name: 'help',
  components: { HelloWorld },
  data: function () {
    return {
      dateTime: this.utils.getNowDateTime(),
      date: this.utils.getNowDate()
    }
  },
  created: function () {
    net.test().then(res => {
      if (res !== 'error') {
        console.log('请求成功')
      }
    })
  },
  mounted: function () {},
  methods: {}
}
</script>

<style scoped lang="less">
</style>
