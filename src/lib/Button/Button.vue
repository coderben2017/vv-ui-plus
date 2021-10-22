<template>
  <button
    :type="nativeType"
    :class="[
			'vv-button',
			'vv-button--' + size,
			'vv-button--' + theme + '-' + type,
			{
				'vv-button--loading': loading
			},
		]"
    :disabled="disabled || loading"
    @click="onClick"
  >
    <span
      v-if="loading"
      class="vv-loading"
    ></span>
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps, buttonEmits } from './Button'

export default defineComponent({
  name: 'VVButton',

  props: buttonProps,
  emits: buttonEmits,

  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      if (props.nativeType === 'reset') {
        // TODO: reset form
      }
      emit('click', event)
    }

    return {
      onClick
    }
  },
})
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
