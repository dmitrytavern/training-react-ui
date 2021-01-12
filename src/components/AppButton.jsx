import './AppButton.sass'
import React from 'react'
import PropTypes from "prop-types"

const AppButton = ({ className, theme, type, href, disabled, buttonProps, children }) => {
	let props = buttonProps || {}
	let buttonClassName = 'app-button'
	switch (theme) {
		case 'link': buttonClassName += ' app-button_link'; break
		case 'filled': buttonClassName += ' app-button_filled'; break
		case 'outline': buttonClassName += ' app-button_outline'; break
		default: {
			if (theme.length !== 0) {
				buttonClassName += ' app-button_' + theme
			} else {
				buttonClassName += ' app-button_filled'
			}
		}
	}
	if (disabled) {
		buttonClassName += ' app-button_disabled'
		props['disabled'] = 'disabled'
	}
	if (className) buttonClassName += ' ' + className

	if (type === 'link') {
		return (
			<a
				href={href}
				className={buttonClassName}

				{...props}
			>

				{children}
			</a>
		)
	}

	return (
		<button
			type={type}
			className={buttonClassName}

			{...props}
		>

			{children}
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
