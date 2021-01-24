import './AppInput.sass'
import clsx from "clsx"
import classes from "./classes"
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


	// Class naming

	const innerClassName = clsx({
		[classes.inner]: true,
		[classes.innerError]: error,
		[classes.innerFocus]: focus
	})

	const inputClassName = clsx({
		[classes.input]: true,
		[classes.inputShift]: label,
		[classes.inputFocus]: focus,
	})

	const labelClassName = clsx({
		[classes.label]: true,
		[classes.labelActive]: focus || value.length !== 0
	})

	const errorClassName = clsx({
		[classes.error]: true,
		[classes.errorActive]: error
	})

	return (
		<div className={classes.root}>
			<div className={innerClassName}>

				{props.startAdornment}

				<div className={classes.wrapper}>
					{label && (
						<label htmlFor={id} className={labelClassName}>{label}</label>
					)}

					<input
						id={id}
						className={inputClassName}
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
				<span className={errorClassName}>{errorMessage}</span>
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
