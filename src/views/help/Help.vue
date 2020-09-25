<template>
  <div class="help">
    <HelloWorld msg="gblcli" />
    <li @click="goBack">{{dateTime}}</li>
    <li @click="goC">goC</li>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed, onMounted, getCurrentInstance } from 'vue'
import utils from '@/util/index'
// 组件
import HelloWorld from '@/components/HelloWorld.vue'

const { ctx } = getCurrentInstance()
const { router, util } = utils()
// 计算属性
const dateTime = computed(() => util.getNowDate(0))
// 生命周期
onMounted(() => {
  ctx.$net('/test').then(res => {
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

export {
  HelloWorld,
  dateTime,
  goBack,
  goC
}
</script>

<style scoped lang="scss">
</style>
