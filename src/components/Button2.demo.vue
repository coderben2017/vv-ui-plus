<demo>加载中</demo>
<template>
  <div>
    <Button theme="border" type="default" :loading="loading">默认按钮</Button>
    <Button theme="border" type="primary" :loading="loading">主要按钮</Button>
    <Button theme="border" type="success" :loading="loading">成功按钮</Button>
    <Button theme="border" type="warning" :loading="loading">警告按钮</Button>
    <Button theme="border" type="error" :loading="loading">失败按钮</Button>
  </div>
  <div>
    <Button theme="fill" type="info" :loading="loading">信息按钮</Button>
    <Button theme="fill" type="primary" :loading="loading">主要按钮</Button>
    <Button theme="fill" type="success" :loading="loading">成功按钮</Button>
    <Button theme="fill" type="warning" :loading="loading">警告按钮</Button>
    <Button theme="fill" type="error" :loading="loading">失败按钮</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Button } from '../lib/index'

export default defineComponent({
  name: 'Button2Demo',
  components: { Button },
  setup() {
    const loading = ref(true)

    return { loading }
  },
})
</script>

<style lang="scss" scoped>

</style>
