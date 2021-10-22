import { ExtractPropTypes } from '@vue/runtime-core'

export const buttonTypes = ['default', 'primary', 'success', 'warning', 'error', 'info']

export const buttonSizes = ['middle', 'large', 'small']

export const themeTypes = ['fill', 'border']

export const nativeTypes = ['submit', 'button', 'reset']

export const buttonProps = {
	type: {
		type: String,
		default: 'default',
		validator(value) {
			return buttonTypes.includes(value)
		}
	},
	size: {
		type: String,
		default: 'middle',
		validator(value) {
			return buttonSizes.includes(value)
		}
	},
	theme: {
		type: String,
		default: 'fill',
		validator(value) {
			return themeTypes.includes(value)
		}
	},
	nativeType: {
		type: String,
		default: 'button',
		validator(value) {
			return nativeTypes.includes(value)
		}
	},
	loading: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
}

export const buttonEmits = {
	click: event => event instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
