import { useState } from "react"
import useForm from "../../hooks/form.hook"
import useFormValidator from "../../hooks/formValidator.hook"
import useAuthContext from "./auth.context"

import AppForm from "../../components/AppForm"
import AppInput from "../../components/AppInput"
import AppInputPasswordIcon from "../../components/AppInputPasswordIcon"
import AppButtonArrow from "../../components/AppButtonArrow"

const AppAuthFormSignUp = () => {
	const [showPassword, setShowPassword] = useState(false)
	const { onLogin } = useAuthContext()
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
		onLogin({...formValues})
	}


	return (
		<div>

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
					autoComplete="email"
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
					autoComplete="current-password"

					endAdornment={
						<AppInputPasswordIcon showPassword={showPassword} setShowPassword={setShowPassword}/>
					}
				/>

				<div style={{height: 15}} />

				<div style={{display: 'flex', justifyContent: 'flex-end'}}>
					<AppButtonArrow position="right" type="submit">
						Continue
					</AppButtonArrow>
				</div>
			</AppForm>

		</div>
	)
}

export default AppAuthFormSignUp
