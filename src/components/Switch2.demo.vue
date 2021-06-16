<demo>支持 disabled</demo>
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script>
import { ref } from "vue";
import { Switch } from "../lib/index";
export default {
  components: { Switch },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>

<style>
</style>