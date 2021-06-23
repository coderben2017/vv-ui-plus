<template>
  <router-view></router-view>
</template>


<script lang="ts">
import { ref, provide, defineComponent } from 'vue'
import router from './router'

export default defineComponent({
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(Boolean(width > 500))

    provide('menuVisible', menuVisible)

    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false
      }
    })
  },
})
</script>
