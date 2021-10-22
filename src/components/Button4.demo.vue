<demo>大小</demo>
<template>
	<div>large</div>
  <div>
    <Button size="large" type="default">默认按钮</Button>
    <Button size="large" type="primary">主要按钮</Button>
    <Button size="large" type="success">成功按钮</Button>
    <Button size="large" type="warning">警告按钮</Button>
    <Button size="large" type="error">失败按钮</Button>
  </div>
	<div>middle(默认)</div>
	<div>
    <Button type="default">默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="error">失败按钮</Button>
  </div>
	<div>small</div>
	<div>
    <Button size="small" type="default">默认按钮</Button>
    <Button size="small" type="primary">主要按钮</Button>
    <Button size="small" type="success">成功按钮</Button>
    <Button size="small" type="warning">警告按钮</Button>
    <Button size="small" type="error">失败按钮</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '../lib/index'

export default defineComponent({
  name: 'Button4Demo',
  components: { Button },
})
</script>

<style lang="scss" scoped>

</style>
