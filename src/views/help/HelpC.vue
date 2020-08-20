<template>
  <div class="helpC">
    <h1>{{dateTime}}</h1>
  </div>
</template>

<script>
import { computed, getCurrentInstance } from 'vue'

export default {
  name: 'helpC',
  setup () {
    const { ctx } = getCurrentInstance()
    // 计算属性
    const dateTime = computed(() => ctx.getNowDate(1))

    return {
      dateTime
    }
  }
}
</script>

<style scoped lang="scss">
</style>
