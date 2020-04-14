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
    this.$net.get('/test').then((res: any) => {
      if (res !== 'error') {
        console.log('请求成功')
      }
    })
  }
}
</script>

<style scoped lang="less">
</style>
