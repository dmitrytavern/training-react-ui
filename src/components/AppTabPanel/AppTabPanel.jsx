import './AppTabPanel.sass'
import classes from "./classes"
import PropTypes from 'prop-types'
import { useRef, useEffect, useState } from 'react'
import { CSSTransition } from "react-transition-group"


const AppTabPanel = (props) => {
	const {
		index,
		value,
		transition,
		transitionName,
		transitionDirection
	} = props

	const nodeRef = useRef(null)
	const [prefix, setPrefix] = useState('')

	const [changing, setChanging] = useState(false)
	const [activeTab, setActiveTab] = useState(value)
	const prevTab = useRef(value)

	const updateActiveTab = (_val) => {
		setActiveTab(_val)
		prevTab.current = _val
		setChanging(false)
	}


	/* Base logic for setting tabs */
	useEffect(() => {
		if (value === prevTab.current && value === activeTab) return

		if (transition === 0) {
			updateActiveTab(value)
		} else {
			setChanging(true)
			setTimeout(() => updateActiveTab(value), transition)
		}
	}, [value, activeTab, index, transition])


	/* Base logic for transition effect */
	useEffect(() => {
		if (!transitionDirection) return
		let prevVal = prevTab.current
		let nextVal = value

		if (index === prevVal) {
			return prevVal < nextVal ? setPrefix('-next') : setPrefix('-prev')
		}

		if (index === nextVal) {
			return prevVal > nextVal ? setPrefix('-next') : setPrefix('-prev')
		}
	}, [value, prevTab, index, transitionDirection])


	/* If transition is none, we return component without transition component */
	if (transition === 0 && transitionName === '') {
		return (
			<div className={classes.root}>
				{ activeTab === index && props.children}
			</div>
		)
	}

	return (
		<CSSTransition
			in={changing}
			nodeRef={nodeRef}
			classNames={{
				appear: transitionName + '-appear',
				appearActive: transitionName + '-appear-active',
				appearDone: transitionName + '-appear-done',
				enter: transitionName + '-enter',
				enterActive: transitionName + prefix + '-enter-active',
				enterDone: transitionName + '-enter-done',
				exit: transitionName + prefix + '-exit',
				exitActive: transitionName + '-exit-active',
				exitDone: transitionName + '-exit-done'
			}}
			timeout={transition}
		>
			<div className={classes.root} ref={nodeRef}>
				{ activeTab === index && props.children}
			</div>
		</CSSTransition>
	)
}

AppTabPanel.propTypes = {
	index: PropTypes.number.isRequired,
	value: PropTypes.any.isRequired,

	transition: PropTypes.number,
	transitionName: PropTypes.string,
	transitionDirection: PropTypes.bool
}

AppTabPanel.propsDefault = {
	transition: 0,
	transitionName: '',
	transitionDirection: false
}

export default AppTabPanel
