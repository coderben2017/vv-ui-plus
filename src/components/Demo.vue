<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="changeCodeVisible(false)" v-if="codeVisible">隐藏代码</Button>
      <Button @click="changeCodeVisible(true)" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre
        class="language-html"
        v-html="
          Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
import "prismjs"
import "prismjs/themes/prism.css"
import { Button } from "../lib/index"

const Prism = (window as any).Prism

export default {
	name: 'Demo',
  components: { Button },
  props: {
    component: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const codeVisible = ref(false)

    const changeCodeVisible = (visible: boolean) => codeVisible.value = visible

    return { Prism, codeVisible, changeCodeVisible }
  },
}
</script>

<style lang="scss">
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  border-radius: 6px;
  margin: 16px 0 32px;

  > h2 {
    font-size: 18px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}


</style>
