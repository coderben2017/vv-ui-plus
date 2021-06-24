<demo>禁用</demo>
<template>
  <div>
    <Button theme="border" type="default" disabled>默认按钮</Button>
    <Button theme="border" type="primary" disabled>主要按钮</Button>
    <Button theme="border" type="success" disabled>成功按钮</Button>
    <Button theme="border" type="warning" disabled>警告按钮</Button>
    <Button theme="border" type="error" disabled>失败按钮</Button>
  </div>
  <div>
    <Button theme="fill" type="info" disabled>信息按钮</Button>
    <Button theme="fill" type="primary" disabled>主要按钮</Button>
    <Button theme="fill" type="success" disabled>成功按钮</Button>
    <Button theme="fill" type="warning" disabled>警告按钮</Button>
    <Button theme="fill" type="error" disabled>失败按钮</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '../lib/index'

export default defineComponent({
  name: 'Button3Demo',
  components: { Button },
})
</script>

<style lang="scss" scoped>

</style>
