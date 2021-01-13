import './AppCheckbox.sass'
import PropTypes from 'prop-types'
import { ReactComponent as AppIconCheck } from '../assets/img/icons/check.svg'

const AppCheckbox = (props) => {
	const { id, value, error, onChange, onClick } = props

	let checkboxClassName = 'app-checkbox'
	if (error) checkboxClassName += ' app-checkbox_error'
	if (value) checkboxClassName += ' app-checkbox_checked'

	return (
		<div className={checkboxClassName}>
			<input
				id={id}
				type="checkbox"
				value={value}
				hidden="hidden"
				onChange={onChange}
				onClick={onClick}

				{...props.inputProps}
			/>

			<label htmlFor={id} className="app-checkbox__label">
				<span className="app-checkbox__box">
					<span className="app-checkbox__box-icon">
						<AppIconCheck />
					</span>
				</span>

				<span>
					{props.children}
				</span>
			</label>
		</div>
	)
}

AppCheckbox.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	onClick: PropTypes.func,
	error: PropTypes.bool,
	inputProps: PropTypes.object
}

export default AppCheckbox
