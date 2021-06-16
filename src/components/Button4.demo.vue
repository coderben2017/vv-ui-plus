<demo>不可用状态</demo>
<template>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接</Button>
    <Button theme="text" disabled>禁用文本</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: { Button },
};
</script>
