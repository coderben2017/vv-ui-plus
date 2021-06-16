<demo>按钮尺寸</demo>
<template>
  <div>
    <Button size="big">大按钮</Button>
    <Button>中按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">大链接</Button>
    <Button theme="link">中链接</Button>
    <Button theme="link" size="small">小链接</Button>
  </div>
  <div>
    <Button theme="text" size="big">大文本</Button>
    <Button theme="text">中文本</Button>
    <Button theme="text" size="small">小文本</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: { Button },
};
</script>
