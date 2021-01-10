import React, { useState, useEffect } from "react"

import AppInput from "./components/AppInput";

function App() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formErrors, setFormErrors] = useState({})
	const [form, setForm] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	})

	const validateForm = () => {
		const errors = {}
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!form.first_name) errors.first_name = "Cannot be blank"
		if (!form.last_name) errors.last_name = "Cannot be blank"

		if (!form.email) {
			errors.email = "Cannot be blank"
		} else if (!regex.test(form.email)) {
			errors.email = "Invalid email format"
		}

		if (!form.password) {
			errors.password = "Cannot be blank"
		} else if (form.password.length < 4) {
			errors.password = "Password must be more than 4 characters"
		}

		setFormErrors(errors)
	}

	const handleChange = (prop) => (event) => {
		setForm({ ...form, [prop]: event.target.value.trim() });
	}

	const handlerSubmit = (event) => {
		event.preventDefault()
		validateForm()
		setIsSubmitting(true)
	}

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmitting) {

		}

		setIsSubmitting(false)
	}, [formErrors])


	return (
		<div className="app">

			<form onSubmit={handlerSubmit} style={{ maxWidth: "440px", padding: '30px' }}>
				<AppInput
					id="first_name"
					label="First name"
					type="text"
					value={form.first_name}
					error={formErrors.first_name !== undefined}
					errorMessage={formErrors.first_name}
					onChange={handleChange('first_name')}
					onFocus={() => setFormErrors(({first_name, ...errors}) => errors)}
				/>

				<div style={{height: 30}} />

				<AppInput
					id="last_name"
					label="Last name"
					type="text"
					value={form.last_name}
					error={formErrors.last_name !== undefined}
					errorMessage={formErrors.last_name}
					onChange={handleChange('last_name')}
					onFocus={() => setFormErrors(({last_name, ...errors}) => errors)}
				/>

				<div style={{height: 30}} />

				<AppInput
					id="email"
					label="Email"
					type="email"
					value={form.email}
					error={formErrors.email !== undefined}
					errorMessage={formErrors.email}
					onChange={handleChange('email')}
					onFocus={() => setFormErrors(({email, ...errors}) => errors)}
				/>

				<div style={{height: 30}} />

				<AppInput
					id="password"
					label="Password"
					type="password"
					value={form.password}
					error={formErrors.password !== undefined}
					errorMessage={formErrors.password}
					onChange={handleChange('password')}
					onFocus={() => setFormErrors(({password, ...errors}) => errors)}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default App
