import PropTypes from 'prop-types'
import { useEffect, useState } from "react"


const AppForm = (props) => {
	const { errors, validation, action, onSubmit } = props
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handlerSubmit = (event) => {
		event.preventDefault()
		if (validation) validation()
		setIsSubmitting(true)
		if (onSubmit) onSubmit()
	}

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			action()
		}

		setIsSubmitting(false)
	}, [errors, isSubmitting, action])


	return (
		<form onSubmit={handlerSubmit}>
			{ props.children }
		</form>
	)
}

AppForm.defaultProps = {
	errors: {}
}

AppForm.propTypes = {
	errors: PropTypes.object,
	validation: PropTypes.func,
	action: PropTypes.func.isRequired,
	onSubmit: PropTypes.func
}

export default AppForm
