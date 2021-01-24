import './AppCheckbox.sass'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as AppIconCheck } from '../assets/img/icons/check.svg'

const AppCheckbox = (props) => {
	const { id, value, error, onChange, onClick } = props
	const [focus, setFocus] = useState(false)


	const handlerKeyDown = (e) => {
		if (e.key === 'Enter') {
			onChange()
		}
	}

	const handlerFocus = () => {
		setFocus(true)
	}

	const handlerBlur = () => {
		setFocus(false)
	}

	let checkboxClassName = 'app-checkbox'
	if (focus) checkboxClassName += ' app-checkbox_focus'
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

			<label
				htmlFor={id}
				className="app-checkbox__label"
				onFocus={handlerFocus}
				onBlur={handlerBlur}
				onKeyDown={handlerKeyDown}
				tabIndex={0}
			>
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
