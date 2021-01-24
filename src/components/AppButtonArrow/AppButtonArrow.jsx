import './AppButtonArrow.sass'
import clsx from "clsx"
import classes from "./classes"
import PropTypes from 'prop-types'
import { ReactComponent as AppIconArrowRight } from '../../assets/img/icons/arrow-right.svg'
import { ReactComponent as AppIconArrowLeft } from '../../assets/img/icons/arrow-left.svg'

import AppButton, { propTypes } from "../AppButton/AppButton"

const AppButtonArrow = (props) => {
	const { className, position, disabled, children, ...other} = props

	// Class naming
	const rootClassName = clsx([
		[classes.root],
		[classes.rootDirection + position],
		[className]
	])

	const arrowLeft = clsx([classes.arrow], [classes.arrowLeft])
	const arrowRight = clsx([classes.arrow], [classes.arrowRight])

	return (
		<AppButton className={rootClassName} disabled={disabled} {...other}>
			<div className={classes.inner}>

				{position === 'left' && (
					<span className={arrowLeft}>
						<AppIconArrowLeft />
					</span>
				)}

				{children}

				{position === 'right' && (
					<span className={arrowRight}>
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
