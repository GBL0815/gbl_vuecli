<template>
  <div class="help">
    <router-link to="/home">toHome</router-link>
    <div>{{ dateTime }}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Help extends Vue {
  dateTime = '123'
  created (): void {
    this.init()
  }

  init (): void {
    Promise.all([this.getTest1(), this.getTest2()]).then((res) => {
      console.log(res, '接口全部请求成功')
    })
  }

  getTest1 () {
    return new Promise((resolve: any, reject: any) => {
      // this.$net('/test').then((res: any) => {
      //   console.log('接口1请求成功')
      //   resolve(res.data)
      // })
    })
  }

  getTest2 () {
    return new Promise((resolve: any, reject: any) => {
      // this.$net('/test').then((res: any) => {
      //   console.log('接口2请求成功')
      //   resolve(res.data)
      // })
    })
  }
}
</script>

<style scoped lang="scss">
</style>
