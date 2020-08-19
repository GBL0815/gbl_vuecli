<template>
  <div class="help">
    <HelloWorld msg="gblcli" />
    <li @click="goBack">{{dateTime}}</li>
  </div>
</template>

<script>
import { computed, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'help',
  components: { HelloWorld },
  setup () {
    const { ctx } = getCurrentInstance()
    const router = useRouter()
    // 计算属性
    const dateTime = computed(() => ctx.getNowDate(0))
    // 生命周期
    onMounted(() => {
      ctx.net('/test').then(res => {
        console.log('请求成功')
      })
    })
    // 方法
    const goBack = () => {
      router.push('/home')
    }

    return {
      dateTime,
      goBack
    }
  }
}
</script>

<style scoped lang="scss">
</style>
