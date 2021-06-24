<demo>基础用法</demo>
<template>
  <div>
    <Button theme="border" type="default">默认按钮</Button>
    <Button theme="border" type="primary">主要按钮</Button>
    <Button theme="border" type="success">成功按钮</Button>
    <Button theme="border" type="warning">警告按钮</Button>
    <Button theme="border" type="error">失败按钮</Button>
  </div>
  <div>
    <Button theme="fill" type="info">信息按钮</Button>
    <Button theme="fill" type="primary">主要按钮</Button>
    <Button theme="fill" type="success">成功按钮</Button>
    <Button theme="fill" type="warning">警告按钮</Button>
    <Button theme="fill" type="error">失败按钮</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '../lib/index'

export default defineComponent({
  name: 'Button1Demo',
  components: { Button },
})
</script>

<style lang="scss" scoped>

</style>
