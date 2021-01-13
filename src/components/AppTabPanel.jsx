import './AppTabPanel.sass'
import PropTypes from 'prop-types'
import { useRef, useEffect, useState } from 'react'
import { CSSTransition } from "react-transition-group"
import { useTabsContext } from "./AppTabs"


const AppTabPanel = (props) => {
	const nodeRef = useRef(null)
	const { index } = props
	const { changing, currentActive, currentNext, currentPrev, transition, transitionName } = useTabsContext()
	const [prefix, setPrefix] = useState('');

	useEffect(() => {
		if (index === currentPrev) {
			return currentPrev < currentNext ? setPrefix('-next') : setPrefix('-prev')
		}

		if (index === currentNext) {
			return currentPrev > currentNext ? setPrefix('-next') : setPrefix('-prev')
		}
	}, [currentPrev, currentNext, index])


	if (transition === 0 && transitionName === '') {
		return (
			<div className="app-tab">
				{ currentActive === index && props.children}
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
			<div className="app-tab-panel" ref={nodeRef}>
				{ currentActive === index && props.children}
			</div>
		</CSSTransition>
	)
}

AppTabPanel.propTypes = {
	index: PropTypes.number.isRequired
}

export default AppTabPanel
