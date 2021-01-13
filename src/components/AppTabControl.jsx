import './AppTabControl.sass'
import PropTypes from 'prop-types'
import { useTabsContext } from "./AppTabs"

const AppTabControl = (props) => {
	const { index } = props
	const { currentNext, onChange } = useTabsContext()

	let tabName = 'app-tab-control'
	if (currentNext === index) tabName += ' app-tab-control_active'

	return (
		<button
			type="button"
			className={tabName}
			onClick={(event => onChange(event, index, currentNext))}
		>
			{props.children}
		</button>
	)
}

AppTabControl.propTypes = {
	index: PropTypes.number.isRequired
}

export default AppTabControl
