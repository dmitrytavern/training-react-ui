import './AppTabControl.sass'
import clsx from "clsx"
import classes from "./classes"
import PropTypes from 'prop-types'

const AppTabControl = (props) => {
	const { index, value, onChange } = props


	// Class naming

	const rootClassName = clsx({
		[classes.root]: true,
		[classes.rootActive]: value === index
	})

	return (
		<button
			type="button"
			className={rootClassName}
			onClick={() => onChange(index)}
		>
			{props.children}
		</button>
	)
}

AppTabControl.propTypes = {
	index: PropTypes.number.isRequired,
}

export default AppTabControl
