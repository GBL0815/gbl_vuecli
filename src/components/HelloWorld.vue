<template>
  <div class="hello">
    <strong>{{ msg }}</strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props) {
    console.log(props.msg)
  }
})
</script>

<style scoped lang="scss">
</style>
