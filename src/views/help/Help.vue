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
  public dateTime = util.getNowDate(0)
  public created (): void {
    this.init()
  }

  public init (): void {
    Promise.all([this.pro1(), this.pro2()]).then((res) => {
      console.log(res, '接口全部请求成功')
    }).catch((error) => {
      console.log(error)
    })
  }

  pro1 (): Promise<unknown> {
    return new Promise(resolve => {
      net('/test', 'get').then((res: unknown) => {
        console.log(res)
        resolve('接口1')
      })
    })
  }

  pro2 (): Promise<unknown> {
    return new Promise(resolve => {
      net('/test', 'get').then((res: unknown) => {
        console.log(res)
        resolve('接口2')
      })
    })
  }
}
</script>

<style scoped lang="scss">
</style>
