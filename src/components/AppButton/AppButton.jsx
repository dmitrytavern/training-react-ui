import clsx from "clsx"
import classes from "./classes"
import PropTypes from "prop-types"

import AppButtonBase, { propTypes as buttonBasePropTypes } from "../AppButtonBase"
import AppSpinner from "../AppSpinner"

const AppButton = (props) => {
	const { className, variant, spinner, ...other} = props
	let componentProps = {}


	// Classes
	const rootClassName = clsx({
		[classes.root]: true,
		[classes.rootVariant + variant]: true,
		[classes.rootActiveSpinner]: spinner,
		[className]: !!className,
	})

	return (
		<AppButtonBase
			className={rootClassName}

			{...componentProps}
			{...other}
		>
			<div className={classes.inner}>
				{props.children}

				<AppSpinner className={classes.spinner} show={spinner}/>
			</div>
		</AppButtonBase>
	)
}

AppButton.propTypes = {
	variant: PropTypes.oneOf([
		'link',
		'filled',
		'outline',
	]),
	spinner: PropTypes.bool,

	...buttonBasePropTypes
}

AppButton.defaultProps = {
	variant: 'link',
	spinner: false
}

export default AppButton
