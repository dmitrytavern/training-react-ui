import classes from "./classes"
import { useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group"

const AppLoader = (props) => {
	const ref = useRef()
	const { show } = props

	return (
		<CSSTransition
			in={show}
			nodeRef={ref}
			classNames={classes.transitionName}
			timeout={300}
			unmountOnExit
		>
			<div className={classes.root} ref={ref}>
				<div className={classes.loader}>
					Loading...
				</div>
			</div>
		</CSSTransition>
	)
}

AppLoader.propTypes = {
	show: PropTypes.bool.isRequired
}

export default AppLoader
