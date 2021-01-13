import './AppTabsBar.sass'
import PropTypes from 'prop-types'

const AppTabsBar = (props) => {
	const { className } = props

	let tabBarClassName = 'app-tab-bar'
	if (className) tabBarClassName += ' ' + className

	return (
		<div className={tabBarClassName}>
			{props.children}
		</div>
	)
}

AppTabsBar.propTypes = {
	className: PropTypes.string
}

export default AppTabsBar
