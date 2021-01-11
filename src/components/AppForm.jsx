import { useEffect, useState } from "react"


const AppForm = ({ children, errors, validation, action, onSubmit }) => {
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
			{ children }
		</form>
	);
};

export default AppForm
