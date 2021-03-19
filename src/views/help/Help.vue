<template>
  <div class="help">
    <router-link to="/home">toHome</router-link>
    <div>{{ dateTime.date }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive
} from 'vue'

import { util, net } from '@/util/index'

interface dateTime {
  date: string
}

export default defineComponent({
  setup () {
    const dateTime = reactive<dateTime>({ date: util.getNowDate(0) })

    onMounted(() => {
      init()
    })

    const init = (): void => {
      Promise.all([pro1(), pro2()]).then((res: unknown) => {
        console.log(res, '接口全部请求成功')
      }).catch((error: Error) => {
        console.log(error)
      })
    }

    const pro1 = (): Promise<unknown> => {
      return new Promise(resolve => {
        net('/test', 'get').then((res: unknown) => {
          console.log(res)
          resolve('接口1')
        })
      })
    }

    const pro2 = (): Promise<unknown> => {
      return new Promise(resolve => {
        net('/test', 'get').then((res: unknown) => {
          console.log(res)
          resolve('接口2')
        })
      })
    }

    return {
      dateTime
    }
  }
})
</script>

<style scoped lang="scss">
</style>
