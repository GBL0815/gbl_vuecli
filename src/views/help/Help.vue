<template>
  <div class="help">
    <HelloWorld msg="gblcli" />
    <li @click="goBack">{{dateTime}}</li>
    <li @click="goC">goC</li>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  computed,
  onMounted,
  getCurrentInstance
} from 'vue'
import util from '../../util/index'

import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'help_com',
  components: { HelloWorld },
  setup () {
    const { proxy } = getCurrentInstance()
    const { router, utils } = util()
    // 计算属性
    const dateTime = computed(() => utils.getNowDate(0))
    // 生命周期
    onMounted(() => {
      proxy.$net('/api/test').then(() => {
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
