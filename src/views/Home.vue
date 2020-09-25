<template>
  <div class="home">
    <div @click="goHelpRoute">{{ goHelp.value }}</div>
    <div class="test" @click="test">{{ testStore }}</div>
    <div>{{ testGetter }}</div>
    <img src="@/assets/test.jpg" alt="">
  </div>
</template>

<script setup>
import { computed, onMounted, ref, reactive, watchEffect } from 'vue'
import utils from '@/util/index'

const { router, store } = utils()
// 变量
const color = ref('red')
const goHelp = reactive({ value: 'toHelp' })
// 计算属性
const testStore = computed(() => store.state.home.test)
const testGetter = computed(() => store.getters.test)
// 副作用
watchEffect(() => {
  console.log(testStore)
})
// 生命周期
onMounted(() => {
  store.dispatch('test')
})
// 方法
const goHelpRoute = () => {
  router.push('/help')
}
const test = () => {
  color.value = 'blue'
}

export {
  goHelp,
  color,
  testStore,
  testGetter,
  goHelpRoute,
  test
}
</script>

<style scoped lang="scss" vars="{ color }">
.test {
  color: var(--color);
}
</style>
