import './AppButton.sass'
import React from 'react'
import PropTypes from "prop-types"

const AppButton = (props) => {
	const { className, type, href, disabled } = props
	const theme = props.theme || 'filled'
	const buttonProps = props.buttonProps || {}

	let buttonClassName = `app-button app-button_${theme}`

	if (disabled) {
		buttonClassName += ' app-button_disabled'
		buttonProps['disabled'] = 'disabled'
	}

	if (className) buttonClassName += ' ' + className

	if (type === 'link') {
		return (
			<a
				href={href}
				className={buttonClassName}

				{...buttonProps}
			>

				{props.children}
			</a>
		)
	}

	return (
		<button
			type={type}
			className={buttonClassName}

			{...buttonProps}
		>

			{props.children}
		</button>
	)
}

export const propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	theme: PropTypes.string,
	href: (props, prop) => {
		if (props['type'] === 'link') {
			if (!props[prop]) {
				return new Error('Invalid prop')
			}
		}
	},
	buttonProps: PropTypes.object
}

AppButton.propTypes = propTypes

export default AppButton
