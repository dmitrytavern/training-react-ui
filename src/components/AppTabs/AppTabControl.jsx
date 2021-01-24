import './AppTabControl.sass'
import PropTypes from 'prop-types'

const AppTabControl = (props) => {
	const { index, value, onChange } = props

	let tabName = 'app-tab-control'
	if (value === index) tabName += ' is-active'

	return (
		<button
			type="button"
			className={tabName}
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
