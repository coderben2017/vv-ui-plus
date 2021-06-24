<template>
  <h1>Button 示例</h1>
  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Demo from '../components/Demo.vue'
import Button1Demo from '../components/Button1.demo.vue'
import Button2Demo from '../components/Button2.demo.vue'
import Button3Demo from '../components/Button3.demo.vue'

export default defineComponent({
  components: { Demo },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
    }
  },
})
</script>


<style lang="scss">
.demo-component > div {
	padding: 10px;

  button {
    margin-right: 10px;
  }
}
</style>
