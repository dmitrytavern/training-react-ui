import './AppAlert.sass'
import clsx from "clsx"
import classes from "./classes"
import { useRef } from "react"
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group"
import { ReactComponent as AppIconAlertDanger } from '../../assets/img/icons/alert-danger.svg'
import { ReactComponent as AppIconClose } from '../../assets/img/icons/close.svg'


const AppAlert = (props) => {
	const alertRef = useRef(null)
	const { variant, show, content, onClose, children } = props


	// Class naming

	const rootClassName = clsx([
		[classes.root],
		[classes.rootVariant + variant]
	])

	return (
		<CSSTransition
			in={show}
			nodeRef={alertRef}
			classNames={classes.transitionName}
			timeout={300}
			unmountOnExit
		>
			<div className={rootClassName} ref={alertRef}>
				<div className={classes.inner}>
					<div className={classes.icon}>
						{ variant === classes.variants.danger && <AppIconAlertDanger /> }
					</div>

					<div className={classes.content}>
						{content || children}
					</div>

					<button
						type="button"
						className={classes.close}
						onClick={onClose}
					>
						<AppIconClose />
					</button>
				</div>
			</div>
		</CSSTransition>
	)
}

AppAlert.propTypes = {
	variant: PropTypes.string,
	show: PropTypes.bool.isRequired,
	content: PropTypes.any,
	onClose: PropTypes.func.isRequired
}

AppAlert.defaultProps = {
	variant: 'default'
}

export default AppAlert
