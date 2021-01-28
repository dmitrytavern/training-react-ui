import clsx from "clsx"
import classes from "./classes"
import PropTypes from "prop-types"

import AppButtonBase, { propTypes as buttonBasePropTypes } from "../AppButtonBase"

const AppButton = (props) => {
	const { className, variant, ...other} = props
	let componentProps = {}


	// Classes
	const rootClassName = clsx({
		[classes.root]: true,
		[classes.rootVariant + variant]: true,
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

	...buttonBasePropTypes
}

AppButton.defaultProps = {
	variant: 'link'
}

export default AppButton
