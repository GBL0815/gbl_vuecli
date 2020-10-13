<template>
  <div class="helpC">
    <h1>{{dateTime}}</h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import utils from '@/util/index'

export default {
  setup () {
    const { util } = utils()
    // 计算属性
    const dateTime = computed(() => util.getNowDate(1))

    return {
      dateTime
    }
  }
}
</script>

<style scoped lang="scss">
</style>
