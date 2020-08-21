<template>
  <div class="home">
    <div @click="goHelpRoute">{{ goHelp }}</div>
    <div>{{ testStore }}</div>
    <div>{{ testGetter }}</div>
    <img src="@/assets/test.jpg" alt="">
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'home',
  setup () {
    const router = useRouter()
    const store = useStore()
    // 变量
    const goHelp = ref('toHelp')
    // 计算属性
    const testStore = computed(() => store.state.home.test)
    const testGetter = computed(() => store.getters.test)
    // 生命周期
    onMounted(() => {
      store.dispatch('test')
    })
    // 方法
    const goHelpRoute = () => {
      router.push('/help')
    }

    return {
      goHelp,
      testStore,
      testGetter,
      goHelpRoute
    }
  }
}
</script>

<style scoped lang="scss">
</style>
