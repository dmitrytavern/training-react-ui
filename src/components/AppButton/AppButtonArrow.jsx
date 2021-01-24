import './AppButtonArrow.sass'
import PropTypes from 'prop-types'
import { ReactComponent as AppIconArrowRight } from '../../assets/img/icons/arrow-right.svg'
import { ReactComponent as AppIconArrowLeft } from '../../assets/img/icons/arrow-left.svg'

import AppButton, { propTypes } from "./AppButton"

const AppButtonArrow = (props) => {
	const { className, position, disabled, children, ...other} = props

	let buttonClassName = 'app-button-arrow app-button-arrow_' + position
	if (className) buttonClassName += ' ' + className

	return (
		<AppButton className={buttonClassName} disabled={disabled} {...other}>
			<div className="app-button-arrow__inner">

				{position === 'left' && (
					<span className="app-button-arrow__arrow app-button-arrow__arrow_left">
						<AppIconArrowLeft />
					</span>
				)}

				{children}

				{position === 'right' && (
					<span className="app-button-arrow__arrow app-button-arrow__arrow_right">
						<AppIconArrowRight />
					</span>
				)}

			</div>
		</AppButton>
	)
}

AppButtonArrow.propTypes = {
	className: PropTypes.string,
	position: PropTypes.oneOf(['left', 'right']),

	...propTypes
}

AppButtonArrow.defaultProps = {
	position: 'left'
}

export default AppButtonArrow
