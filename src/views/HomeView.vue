<template>
  <div class="home">
    <div @click="goHelpRoute">{{ goHelp }}</div>
    <div>{{ homeStore.text }}</div>
    <div>{{ homeStore.hello }}</div>
    <img src="@/assets/image/test.jpg" alt="">
  </div>
</template>

<script>
import {
  onMounted,
  ref,
  watchEffect
} from 'vue'
import { useHomeStore } from '@/stores'
import util from '@/util/index'

export default {
  name: 'homeView',
  setup() {
    const { router } = util()
    // pinia
    const homeStore = useHomeStore()
    // 变量
    const goHelp = ref('toHelp')
    // 副作用
    watchEffect(() => {
      console.log(homeStore)
    })
    // 生命周期
    onMounted(() => {
      homeStore.test()
    })
    // 方法
    const goHelpRoute = () => {
      router.push('/help')
    }

    return {
      goHelp,
      homeStore,
      goHelpRoute
    }
  }
}
</script>

<style scoped lang="scss"></style>
