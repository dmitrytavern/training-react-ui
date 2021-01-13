import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

function noop() {}
const TabsContext = createContext({
	current: null,
	currentNext: null,
	currentPrev: null,
	changing: false,
	onChange: noop,
	transition: 0,
	transitionName: ''
})

export function useTabsContext() {
	return useContext(TabsContext)
}

const AppTabs = (props) => {
	const [changing, setChanging] = useState(false)
	const [currentPrev, setCurrentPrev] = useState(props.value)
	const [currentNext, setCurrentNext] = useState(props.value)

	const current = props.value
	const transition = props.transition || 0
	const transitionName = props.transitionName || ''

	const handlerChange = (event, newVal, oldVal) => {
		if (current === newVal) return
		setChanging(true)
		setCurrentNext(newVal)
		setCurrentPrev(oldVal)

		if (transition === 0) {
			props.onChange(event, newVal)
			setChanging(false)
		} else {
			setTimeout(() => {
				props.onChange(event, newVal)
				setChanging(false)
			}, transition)
		}
	}


	const providerValue = {
		transition,
		transitionName,
		current,
		currentNext,
		currentPrev,
		changing,
		onChange: handlerChange
	}

	return (
		<TabsContext.Provider value={providerValue}>
			<div className="app-tab-container">
				{props.children}
			</div>
		</TabsContext.Provider>
	)
}

AppTabs.propTypes = {
	value: PropTypes.any.isRequired,
	transition: PropTypes.number,
	transitionName: PropTypes.string,
	onChange: PropTypes.func.isRequired
}

export default AppTabs
