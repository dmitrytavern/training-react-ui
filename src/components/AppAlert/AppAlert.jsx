import './AppAlert.sass'
import { useRef } from "react"
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group"
import { ReactComponent as AppIconAlertDanger } from '../../assets/img/icons/alert-danger.svg'
import { ReactComponent as AppIconClose } from '../../assets/img/icons/close.svg'


const AppAlert = (props) => {
	const alertRef = useRef(null)
	const { type, show, content, onClose, children } = props
	const theme = ' app-alert_' + (type || 'default')

	let alertClassName = 'app-alert' + theme

	return (
		<CSSTransition
			in={show}
			nodeRef={alertRef}
			classNames="app-alert"
			timeout={300}
			unmountOnExit
		>
			<div className={alertClassName} ref={alertRef}>
				<div className="app-alert__inner">
					<div className="app-alert__icon">
						{ type === 'danger' && <AppIconAlertDanger /> }
					</div>

					<div className="app-alert__content">
						{content || children}
					</div>

					<button
						type="button"
						className="app-alert__close"
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
	type: PropTypes.string,
	show: PropTypes.bool.isRequired,
	content: PropTypes.any,
	onClose: PropTypes.func.isRequired
}

export default AppAlert
