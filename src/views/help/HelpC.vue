<template>
  <div class="helpC">
    <h1>{{dateTime}}</h1>
  </div>
</template>

<script>
import {
  computed
} from 'vue'
import util from '@/util/index'

export default {
  name: 'help_C',
  setup () {
    const { utils } = util()
    // 计算属性
    const dateTime = computed(() => utils.getNowDate(1))

    return {
      dateTime
    }
  }
}
</script>

<style scoped lang="scss">
</style>
