<demo>加载中状态</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Button } from "../lib/index"

export default defineComponent({
	name: 'Button5Demo',
  components: { Button },
})
</script>
