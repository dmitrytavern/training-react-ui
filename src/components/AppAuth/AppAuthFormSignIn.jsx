import { useState } from "react"
import useForm from "../../hooks/form.hook"
import useFormValidator from "../../hooks/formValidator.hook"

import AppForm from "../AppForm"
import AppInput from "../AppInput"
import AppInputPasswordIcon from "../AppInputPasswordIcon";

const AppAuthFormSignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { formErrors, validators, clearError } = useFormValidator()
	const { formValues, setFormValue } = useForm({
		email: '',
		password: '',
	})

	const validateForm = () => {
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
					id="sign-in-email"
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
					id="sign-in-password"
					label="Password"
					type={showPassword ? "text" : "password"}
					value={formValues.password}
					error={formErrors.password !== undefined}
					errorMessage={formErrors.password}
					onChange={setFormValue('password')}
					onFocus={() => clearError('password')}
					inputProps={{
						autoComplete: 'current-password'
					}}

					slotIconRight={<AppInputPasswordIcon showPassword={showPassword} setShowPassword={setShowPassword}/>}
				/>

				<button type="submit">Submit</button>
			</AppForm>

		</div>
	)
}

export default AppAuthFormSignUp
