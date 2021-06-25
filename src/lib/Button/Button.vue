<template>
  <button
    :type="nativeType"
    :class="[
			'vv-button',
			{
				'vv-button-loading': loading
			},
			colorClass,
		]"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="vv-loading"></span>
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type Type = PropType<
  'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
>
type ThemeType = PropType<'fill' | 'border'>
type NativeType = PropType<'submit' | 'button' | 'reset'>
type ButtonType = {
  type: String
  theme: String
  nativeType: String
  loading: Boolean
  disabled: Boolean
}

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as Type,
      default: 'default',
      validator: (value: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'error',
          'info',
        ].includes(value)
      },
    },
    theme: {
      type: String as ThemeType,
      default: 'fill',
      validator: (value: string) => {
        return ['fill', 'border'].includes(value)
      },
    },
    nativeType: {
      type: String as NativeType,
      default: 'button',
      validator: (value: string) => {
        return ['submit', 'button', 'reset'].includes(value)
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: ButtonType) {
    const colorClass = computed(() => {
      const { type, theme } = props
      return `vv-button-${theme}-${type}`
    })

    return {
      colorClass,
    }
  },
})
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>
