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
  public router = useRouter()
  public store = useStore()
  public testStore = this.store.state.home.test
  public created (): void {
    console.log('create')
    this.init()
  }

  public mounted (): void {
    console.log('mounted')
  }

  public init (): void {
    console.log('init')
  }

  public toHelp (): void {
    this.router.push('/help')
  }
}
</script>

<style scoped lang="scss">
</style>
