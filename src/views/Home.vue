<template>
  <div class="home">
    <a @click="toHelp">toHelp</a>
    <HelloWorld :msg="testStore"></HelloWorld>
    <img class="logo" src="@/assets/img/logo.png" alt="">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

@Options({
  components: { HelloWorld }
})
export default class Home extends Vue {
  router = useRouter()
  store = useStore()
  testStore = this.store.state.home.test
  created (): void {
    console.log('create')
    this.init()
  }

  mounted (): void {
    console.log('mounted')
  }

  init (): void {
    console.log('init')
  }

  toHelp (): void {
    this.router.push('/help')
  }
}
</script>

<style scoped lang="scss">
</style>
