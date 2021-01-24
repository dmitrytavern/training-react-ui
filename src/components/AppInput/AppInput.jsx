import './AppInput.sass'
import PropTypes from 'prop-types'
import { useState } from 'react'

const AppInput = (props) => {
	const { id, label, type, error, errorMessage, value, onChange, onFocus, onBlur, inputProps } = props
	const [focus, setFocus] = useState(false)

	const handlerFocus = (event) => {
		setFocus(true)
		onFocus(event)
	}

	const handlerBlur = (event) => {
		setFocus(false)
		onBlur(event)
	}


	let inputClassName = 'app-input'
	if (label) inputClassName += ' app-input_shift'
	if (error) inputClassName += ' is-error'
	if (focus) inputClassName += ' is-focused'
	if (focus || value.length !== 0) inputClassName += ' is-active'

	return (
		<div className={inputClassName}>
			<div className="app-input__inner">

				{props.startAdornment}

				<div className="app-input__input-wrapper">
					{label && (
						<label htmlFor={id} className="app-input__label">{label}</label>
					)}

					<input
						id={id}
						className="app-input__input"
						type={type}

						value={value}
						onFocus={handlerFocus}
						onBlur={handlerBlur}
						onChange={onChange}
						{...inputProps}
					/>

				</div>

				{props.endAdornment}
			</div>

			{errorMessage && (
				<span className="app-input__error">{errorMessage}</span>
			)}

		</div>
	)
}

AppInput.defaultProps = {
	type: 'text',
	onFocus: () => {},
	onBlur: () => {}
}

AppInput.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	label: PropTypes.string,
	type: PropTypes.string,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	inputProps: PropTypes.object,

	startAdornment: PropTypes.element,
	endAdornment: PropTypes.element
}

export default AppInput
