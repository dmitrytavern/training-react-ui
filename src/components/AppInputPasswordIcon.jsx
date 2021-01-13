import './AppInputPasswordIcon.sass'
import PropTypes from 'prop-types'
import { ReactComponent as AppIconEyeOn } from "../assets/img/icons/eye-on.svg"
import { ReactComponent as AppIconEyeOff } from "../assets/img/icons/eye-off.svg"

const AppInputPasswordIcon = ({ showPassword, setShowPassword }) => {
	return (
		<button onClick={() => setShowPassword(val => !val)} type="button" className="app-input-icon">
			{ showPassword ? <AppIconEyeOn /> : <AppIconEyeOff /> }
		</button>
	)
}

AppInputPasswordIcon.propTypes = {
	showPassword: PropTypes.bool.isRequired,
	setShowPassword: PropTypes.func.isRequired
}

export default AppInputPasswordIcon
