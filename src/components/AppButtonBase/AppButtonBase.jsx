import { useState } from 'react'
import clsx from "clsx"
import classes from "./classes"
import PropTypes from "prop-types"

const AppButtonBase = (props) => {
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

	if (disabled) {
		componentProps['disabled'] = 'disabled'
	}


	// Classes
	const rootClassName = clsx({
		[classes.root]: true,
		[className]: !!className,
		[classes.rootHovered]: hovered && !disabled,
		[classes.rootDisabled]: disabled
	})

	return (
		<ComponentName
			className={rootClassName}
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
	href: PropTypes.string,

	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func
}

AppButtonBase.propTypes = propTypes

AppButtonBase.defaultProps = {
	type: 'button'
}

export default AppButtonBase
