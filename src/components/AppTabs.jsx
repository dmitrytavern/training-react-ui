import React from 'react'
import PropTypes from 'prop-types'

const AppTabs = (props) => {
	const { value, onChange } = props

	const children = React.Children.map(props.children, (child) => {
		if (!React.isValidElement(child)) {
			return null
		}

		return React.cloneElement(child, {
			value,
			onChange
		})
	})

	return (
		<div className="app-tabs">
			{children}
		</div>
	)
}

AppTabs.propTypes = {
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default AppTabs
