<template>
  <div class="help">
    <HelloWorld msg="gblcli" />
    <li>{{dateTime}}</li>
    <ul>{{date}}</ul>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'help',
  components: { HelloWorld },
  data: function () {
    return {
      dateTime: this.$utils.getNowDateTime(),
      date: this.$utils.getNowDate()
    }
  },
  created: function () {
    this.$net.get('/net/app/staff/personal/getEnterpriseDetail').then(res => {
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
