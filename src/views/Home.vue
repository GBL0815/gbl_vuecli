<template>
  <div class="home">
    <router-link to="/help">toHelp</router-link>
    <HelloWorld :msg="testStore"></HelloWorld>
    <img class="logo" src="@/assets/img/logo.png" alt="">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'

@Options({
  components: { HelloWorld }
})

export default class Home extends Vue {
  testStore = '123'
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
}
</script>

<style scoped lang="scss">
</style>
