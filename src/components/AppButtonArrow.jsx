import './AppButtonArrow.sass'
import PropTypes from 'prop-types'
import { ReactComponent as AppIconArrowRight } from '../assets/img/icons/arrow-right.svg'
import { ReactComponent as AppIconArrowLeft } from '../assets/img/icons/arrow-left.svg'

import AppButton, { propTypes } from "./AppButton"

const AppButtonArrow = (props) => {
	// Split or modify props from AppButtonArrow and AppButton components
	const { position, disabled, className, children, ...buttonProps} = props
	let iconPosition = position || 'left'

	let buttonClassName = 'app-button-arrow app-button-arrow_' + iconPosition
	if (disabled) buttonClassName += ' app-button-arrow_disabled'
	if (className) buttonClassName += ' ' + className

	return (
		<AppButton
			className={buttonClassName}
			disabled={disabled}

			{...buttonProps}
		>
			{iconPosition === 'left' && (
				<span className="app-button-arrow__arrow app-button-arrow__arrow_left">
				<AppIconArrowLeft />
			</span>
			)}

			{children}

			{iconPosition === 'right' && (
				<span className="app-button-arrow__arrow app-button-arrow__arrow_right">
				<AppIconArrowRight />
			</span>
			)}
		</AppButton>
	)
}

AppButtonArrow.propTypes = {
	position: PropTypes.oneOf(['left', 'right']),

	...propTypes
}

export default AppButtonArrow
