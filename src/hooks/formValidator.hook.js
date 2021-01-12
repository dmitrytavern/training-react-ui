import { useState } from 'react';

const useFormValidator = () => {
	const [formErrors, setFormErrors] = useState({})

	const setError = (key, message) => {
		setFormErrors((val) => {
			return {
				...val,
				[key]: message
			}
		})
	}

	const validator = (callback) => {
		callback(formErrors, setError, setFormErrors)
	}

	const textValidation = (key, value) => {
		if (!value) setError(key, 'Cannot be blank')
	}

	const emailValidation = (key, value) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!value) {
			setError(key, 'Cannot be blank')
		} else if (!regex.test(value)) {
			setError(key, 'Invalid email format')
		}
	}

	const passwordValidation = (key, value) => {
		if (!value) {
			setError(key, 'Cannot be blank')
		} else if (value.length < 4) {
			setError(key, 'Password must be more than 4 characters')
		}
	}

	const checkedValidation = (key, value) => {
		if (!value) {
			setError(key, 'Cannot be not selected')
		}
	}

	const clearError = (key) => {
		setFormErrors(({...oldValue}) => {
			delete oldValue[key]
			return oldValue
		})
	}


	return {
		formErrors,
		clearError,
		validators: {
			validator,
			textValidation,
			emailValidation,
			passwordValidation,
			checkedValidation
		}
	}
}

export default useFormValidator
