import { useState } from 'react';

const useForm = (fields) => {
	const [formValues, setFormValues] = useState(fields)

	const setFormValue = (prop) => (event) => {
		setFormValues({ ...formValues, [prop]: event.target.value.trim() });
	}

	return {
		formValues,
		setFormValue,
		setFormValues
	}
}


export default useForm