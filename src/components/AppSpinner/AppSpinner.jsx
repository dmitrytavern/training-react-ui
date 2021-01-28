import { useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import classes from "./classes";

const AppSpinner = (props) => {
	const ref = useRef(null);
	const { className, show } = props


	// Class naming

	const rootClassName = clsx([
		classes.root,
		[className]
	])

	return (
		<CSSTransition
			in={show}
			nodeRef={ref}
			classNames={classes.transitionName}
			timeout={300}
			unmountOnExit
		>
			<div className={rootClassName} ref={ref}>
				<div className={classes.spinner}>
					Loading...
				</div>
			</div>
		</CSSTransition>
	)
}

AppSpinner.propTypes = {
	show: PropTypes.bool.isRequired,
	className: PropTypes.string
}

export default AppSpinner
