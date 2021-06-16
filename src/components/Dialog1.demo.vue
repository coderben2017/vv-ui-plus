<demo>打开对话框</demo>
<template>
  <div>
    <Button @click="toggle">切换显示</Button>
    <Dialog v-model:visible="y" :closeOnOverlay="true" :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Button, Dialog } from "../lib/index";
export default {
  components: { Dialog, Button },
  setup() {
    const y = ref(false);
    const toggle = () => {
      y.value = !y.value;
      console.log(y.value);
    };

    const f1 = () => {
      return false;
    };
    const f2 = () => {};

    return { y, toggle, f1, f2 };
  },
};
</script>
