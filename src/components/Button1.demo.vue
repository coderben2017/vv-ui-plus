<demo>按钮类型</demo>
<template>
  <div>
    <Button @click="onClick">按钮</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '../lib/index'

export default defineComponent({
  name: 'Button1Demo',
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('hi')
    }

    return { onClick }
  },
})
</script>
