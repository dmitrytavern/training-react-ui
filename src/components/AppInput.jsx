import './AppInput.sass'
import { useState } from 'react'

const AppInput = ({ id, label, type, error, errorMessage, value, onChange, onFocus, inputProps }) => {
	const [focus, setFocus] = useState(false)

	const handlerFocus = () => {
		setFocus(true)
		if (onFocus) onFocus()
	}

	const handlerBlur = () => {
		setFocus(false)
	}


	let inputClassName = 'app-input'
	if (error) inputClassName += ' app-input_error'
	if (focus) inputClassName += ' app-input_focus'
	if (focus || value.length !== 0) inputClassName += ' app-input_active'

	return (
		<div className={inputClassName}>
			<div className="app-input__inner">

				<label htmlFor={id} className="app-input__label">{label}</label>

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

			<span className="app-input__error">{errorMessage}</span>
		</div>
	);
};

export default AppInput;
