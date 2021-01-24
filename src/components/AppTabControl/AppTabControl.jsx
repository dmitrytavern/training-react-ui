import clsx from "clsx"
import classes from "./classes"
import PropTypes from 'prop-types'

import AppButton from "../AppButton"

const AppTabControl = (props) => {
	const { index, value, onChange } = props


	// Class naming

	const rootClassName = clsx({
		[classes.root]: true,
		[classes.rootActive]: value === index
	})

	return (
		<AppButton
			className={rootClassName}
			onClick={() => onChange(index)}
		>
			{props.children}
		</AppButton>
	)
}

AppTabControl.propTypes = {
	index: PropTypes.number.isRequired,
}

export default AppTabControl
