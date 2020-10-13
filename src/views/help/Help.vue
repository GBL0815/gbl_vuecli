<template>
  <div class="help">
    <router-link to="/home">toHome</router-link>
    <div>{{ dateTime }}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { util, net } from '@/util/index'

export default class Help extends Vue {
  dateTime = util.getNowDate(0)
  created (): void {
    this.init()
  }

  init (): void {
    Promise.all([this.pro1, this.pro2]).then((res) => {
      console.log(res, '接口全部请求成功')
    })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  pro1 () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars
    const pro1 = new Promise((resolve: any, reject: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      net('/test', 'get', {}).then((res: any) => {
        console.log('接口1请求成功')
        resolve(res.data)
      })
    })
    return pro1
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  pro2 () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars
    const pro2 = new Promise((resolve: any, reject: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      net('/test', 'get', {}).then((res: any) => {
        console.log('接口2请求成功')
        resolve(res.data)
      })
    })
    return pro2
  }
}
</script>

<style scoped lang="scss">
</style>
