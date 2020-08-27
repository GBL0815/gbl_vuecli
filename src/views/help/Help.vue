<template>
  <div class="help">
    <HelloWorld msg="gblcli" />
    <li @click="goBack">{{dateTime}}</li>
    <li @click="goC">goC</li>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import util from '../../util/index'

import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'help',
  components: { HelloWorld },
  setup () {
    const { router, store, utils, net } = util()
    // 计算属性
    const dateTime = computed(() => utils.getNowDate(0))
    // 生命周期
    onMounted(() => {
      net(`${store.state.http.test}/test`).then(res => {
        console.log('请求成功')
      })
    })
    // 方法
    const goBack = () => {
      router.push('/home')
    }
    const goC = () => {
      router.push('/help/helpC')
    }

    return {
      dateTime,
      goBack,
      goC
    }
  }
}
</script>

<style scoped lang="scss">
</style>
