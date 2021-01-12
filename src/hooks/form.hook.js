import { useState } from 'react';

const useForm = (fields) => {
	const [formValues, setFormValues] = useState(fields)

	const setFormValue = (prop) => (event) => {
		setFormValues({ ...formValues, [prop]: event.target.value.trim() })
	}

	const setTextValue = (prop) => (event) => {
		setFormValues({ ...formValues, [prop]: event.target.value.trim() })
	}

	const setCheckboxValue = (prop) => () => {
		setFormValues((val) =>({ ...formValues, [prop]: !val[prop] }))
	}

	return {
		formValues,
		setFormValue,
		setTextValue,
		setCheckboxValue,
		setFormValues
	}
}


export default useForm