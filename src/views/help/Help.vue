<template>
  <div class="help">
    <router-link to="/home">toHome</router-link>
    <div>{{ dateTime }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Help extends Vue {
  dateTime: string = this.$utils.getNowDate(0)
  created(): void {
    this.init()
  }
  init(): void {
    const netTest = new Promise((resolve: any, reject: any) => {
      this.$net.get('/test').then((res: any) => {
        if (res !== 'error') {
          console.log('接口1请求成功')
          resolve(res.data)
        }
      })
    })
    const netTest2 = new Promise((resolve: any, reject: any) => {
      this.$net.get('/test').then((res: any) => {
        if (res !== 'error') {
          console.log('接口2请求成功')
          resolve(res.data)
        }
      })
    })
    Promise.all([netTest, netTest2]).then((res) => {
      console.log(res, '接口全部请求成功')
    })
  }
}
</script>

<style scoped lang="less">
</style>
