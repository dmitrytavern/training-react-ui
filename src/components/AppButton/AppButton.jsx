import './AppButton.sass'
import { useState } from 'react'
import PropTypes from "prop-types"

const AppButton = (props) => {
	const { className, variant, type, href, disabled, ...other} = props
	const [hovered, setHovered] = useState(false)
	let ComponentName = 'button'
	let componentProps = {}

	const handlerMouseEnter = (event) => {
		setHovered(true)
		if (other.onMouseEnter) other.onMouseEnter(event)
	}

	const handlerMouseLeave = (event) => {
		setHovered(false)
		if (other.onMouseLeave) other.onMouseLeave(event)
	}


	if (href) {
		ComponentName = 'a'
		componentProps['href'] = href
	}

	if (ComponentName === 'button' && !href) {
		componentProps['type'] = type
	}


	// Classes

	let buttonClassName = `app-button app-button_variant_${variant}`
	if (className) buttonClassName += ' ' + className
	if (hovered && !disabled) buttonClassName += ' is-hovered'
	if (disabled) {
		buttonClassName += ' is-disabled'
		componentProps['disabled'] = 'disabled'
	}

	return (
		<ComponentName
			className={buttonClassName}
			onMouseEnter={handlerMouseEnter}
			onMouseLeave={handlerMouseLeave}

			{...componentProps}
			{...other}
		>

			{props.children}
		</ComponentName>
	)
}

export const propTypes = {
	type: PropTypes.oneOf([
		'button',
		'submit',
		'reset'
	]),
	className: PropTypes.string,
	disabled: PropTypes.bool,
	variant: PropTypes.oneOf([
		'link',
		'filled',
		'outline',
	]),
	href: PropTypes.string,

	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func
}

AppButton.propTypes = propTypes

AppButton.defaultProps = {
	type: 'button',
	variant: 'link'
}

export default AppButton
