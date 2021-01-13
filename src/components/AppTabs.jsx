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
	const { value } = props
	const [changing, setChanging] = useState(false)
	const [currentPrev, setCurrentPrev] = useState(value)
	const [currentNext, setCurrentNext] = useState(value)

	const currentActive = value
	const transition = props.transition || 0
	const transitionName = props.transitionName || ''


	const changeState = (event, newVal, oldVal) => {
		props.onChange(event, newVal, oldVal)
		setChanging(false)
	}

	const handlerChange = (event, newVal, oldVal) => {
		if (currentActive === newVal) return
		setChanging(true)
		setCurrentNext(newVal)
		setCurrentPrev(oldVal)

		if (transition === 0) {
			changeState(event, newVal, oldVal)
		} else {
			setTimeout(() => {
				changeState(event, newVal, oldVal)
			}, transition)
		}
	}


	const providerValue = {
		transition,
		transitionName,
		currentActive,
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
