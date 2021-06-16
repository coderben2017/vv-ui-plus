<template>
  <div class="vv-tabs">
    <div class="vv-tabs-nav" ref="container">
      <div
        class="vv-tabs-nav-item"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="vv-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="vv-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect, computed } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect();
          const { left: left1 } = container.value.getBoundingClientRect();
          const { left: left2 } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          indicator.value.style.left = left2 - left1 + "px";
        },
        { flush: "post" }
      );
    });

    const defaults = context.slots.default();
    // 检查是否都是Tab组件
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });

    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      current,
      titles,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.vv-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background-color: $blue;
      left: 0;
      bottom: -1px;
      transition: all 200ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>