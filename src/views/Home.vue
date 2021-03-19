<template>
  <div class="home">
    <a @click="toHelp">toHelp</a>
    <HelloWorld :msg="testStore"></HelloWorld>
    <img class="logo" src="@/assets/img/logo.png" alt="">
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref
} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
  setup () {
    const router = useRouter()
    const store = useStore()
    const testStore = ref<string>(store.state.home.test)

    onMounted((): void => {
      console.log('mounted')
      init()
    })

    const init = (): void => {
      console.log('init')
    }

    const toHelp = (): void => {
      router.push('/help')
    }

    return {
      testStore,
      toHelp
    }
  }
})
</script>

<style scoped lang="scss">
</style>
