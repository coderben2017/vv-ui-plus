<template>
  <button class="vv-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="vv-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { size, theme, level } = props;
    const classes = computed(() => {
      return {
        [`vv-button-theme-${theme}`]: theme,
        [`vv-size-${size}`]: size,
        [`vv-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;
$grey: grey;
$radius: 4px;
.vv-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border-radius: $radius;
  border: 1px solid $border-color;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.vv-theme-link {
    background: transparent;
    box-shadow: none;
    color: $blue;
    border: 0;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.vv-theme-text {
    background: transparent;
    box-shadow: none;
    border: 0;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.vv-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.vv-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.vv-theme-button {
    &.vv-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.vv-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.vv-theme-link {
    &.vv-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.vv-theme-text {
    &.vv-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.vv-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.vv-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.vv-theme-link,
  &.vv-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  .vv-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: vv-spin 1s infinite linear;
  }
}
@keyframes vv-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>