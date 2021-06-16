<demo>按钮主题</demo>
<template>
  <div>
    <Button level="main">大按钮</Button>
    <Button>中按钮</Button>
    <Button level="danger">小按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">大链接</Button>
    <Button theme="link">中链接</Button>
    <Button theme="link" level="danger">小链接</Button>
  </div>
  <div>
    <Button theme="text" level="main">大文本</Button>
    <Button theme="text">中文本</Button>
    <Button theme="text" level="danger">小文本</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: { Button },
};
</script>
