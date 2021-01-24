import './AppLoader.sass'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group"

const AppLoader = (props) => {
	const ref = useRef()
	const { loading } = props

	return (
		<CSSTransition
			in={loading}
			nodeRef={ref}
			classNames="app-loader"
			timeout={300}
			unmountOnExit
		>
			<div className="app-loader-wrapper" ref={ref}>
				<div className="app-loader">
					Loading...
				</div>
			</div>
		</CSSTransition>
	)
}

AppLoader.propTypes = {
	loading: PropTypes.bool.isRequired
}

export default AppLoader
