import useForm from "../hooks/form.hook"
import useFormValidator from "../hooks/formValidator.hook"

import AppForm from "./AppForm"
import AppInput from "./AppInput"

const AppAuthFormSignUp = () => {
	const { formErrors, validators, clearError } = useFormValidator()
	const { formValues, setFormValue } = useForm({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	})

	const validateForm = () => {
		validators.textValidation('first_name', formValues.first_name)
		validators.textValidation('last_name', formValues.last_name)
		validators.emailValidation('email', formValues.email)
		validators.passwordValidation('password', formValues.password)
	}

	const fetchData = () => {
		console.log('Send data')
	}


	return (
		<div style={{ maxWidth: "440px", padding: '30px'}}>

			<AppForm errors={formErrors} action={fetchData} validation={validateForm}>
				<AppInput
					id="first_name"
					label="First name"
					type="text"
					value={formValues.first_name}
					error={formErrors.first_name !== undefined}
					errorMessage={formErrors.first_name}
					onChange={setFormValue('first_name')}
					onFocus={() => clearError('first_name')}
					inputProps={{
						autoComplete: 'name'
					}}
				/>

				<div style={{height: 30}} />

				<AppInput
					id="last_name"
					label="Last name"
					type="text"
					value={formValues.last_name}
					error={formErrors.last_name !== undefined}
					errorMessage={formErrors.last_name}
					onChange={setFormValue('last_name')}
					onFocus={() => clearError('last_name')}
					inputProps={{
						autoComplete: 'name'
					}}
				/>

				<div style={{height: 30}} />

				<AppInput
					id="email"
					label="Email"
					type="email"
					value={formValues.email}
					error={formErrors.email !== undefined}
					errorMessage={formErrors.email}
					onChange={setFormValue('email')}
					onFocus={() => clearError('email')}
					inputProps={{
						autoComplete: 'email'
					}}
				/>

				<div style={{height: 30}} />

				<AppInput
					id="password"
					label="Password"
					type="password"
					value={formValues.password}
					error={formErrors.password !== undefined}
					errorMessage={formErrors.password}
					onChange={setFormValue('password')}
					onFocus={() => clearError('password')}
					inputProps={{
						autoComplete: 'new-password'
					}}
				/>

				<button type="submit">Submit</button>
			</AppForm>

		</div>
	)
}

export default AppAuthFormSignUp
