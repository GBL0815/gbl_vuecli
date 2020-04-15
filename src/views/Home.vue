<template>
  <div class="home">
    <router-link to="/help">toHelp</router-link>
    <HelloWorld :msg="testStore"></HelloWorld>
    <img class="logo" src="@/assets/img/logo.png" alt="">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: { HelloWorld }
})

export default class Home extends Vue {
  testStore: string = this.$store.state.home.test
  created(): void {
    console.log('create')
    this.init()
  }
  mounted(): void {
   console.log('mounted')
  }
  init(): void {
    console.log('init')
  }
}
</script>

<style scoped lang="scss">
</style>
