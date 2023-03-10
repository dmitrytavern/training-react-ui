import { useState, useEffect } from "react"
import useForm from "../../hooks/form.hook"
import useFormValidator from "../../hooks/formValidator.hook"
import useAuthContext from "./auth.context"

import AppForm from "../../components/AppForm"
import AppInput from "../../components/AppInput"
import AppCheckbox from "../../components/AppCheckbox"
import AppInputPasswordIcon from "../../components/AppInputPasswordIcon"
import AppButtonArrow from "../../components/AppButtonArrow"

const AppAuthFormSignUp = () => {
	const [submitBlock, setSubmitBlock] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const { onRegister, data } = useAuthContext()
	const { formErrors, validators, clearError } = useFormValidator()
	const { formValues, setTextValue, setCheckboxValue } = useForm({
		first_name: data.first_name || '',
		last_name: data.last_name || '',
		email: data.email || '',
		password: data.password || '',
		privacy_policy: data.privacy_policy || false
	})

	const validateForm = () => {
		validators.textValidation('first_name', formValues.first_name)
		validators.textValidation('last_name', formValues.last_name)
		validators.emailValidation('email', formValues.email)
		validators.passwordValidation('password', formValues.password)
		validators.checkedValidation('privacy_policy', formValues.privacy_policy)
	}

	const fetchData = () => {
		console.log('Send data')
		onRegister({...formValues})
	}

	useEffect(() => {
		setSubmitBlock(!formValues.privacy_policy)
	}, [formValues.privacy_policy])

	return (
		<div>

			<AppForm errors={formErrors} action={fetchData} validation={validateForm}>
				<AppInput
					id="sign-up-first_name"
					label="First name"
					value={formValues.first_name}
					error={formErrors.first_name !== undefined}
					errorMessage={formErrors.first_name}
					onChange={setTextValue('first_name')}
					onFocus={() => clearError('first_name')}
					autoComplete="given-name"
				/>

				<div style={{height: 30}} />

				<AppInput
					id="sign-up-last_name"
					label="Last name"
					value={formValues.last_name}
					error={formErrors.last_name !== undefined}
					errorMessage={formErrors.last_name}
					onChange={setTextValue('last_name')}
					onFocus={() => clearError('last_name')}
					autoComplete="family-name"
				/>

				<div style={{height: 30}} />

				<AppInput
					id="sign-up-email"
					label="Email"
					type="email"
					value={formValues.email}
					error={formErrors.email !== undefined}
					errorMessage={formErrors.email}
					onChange={setTextValue('email')}
					onFocus={() => clearError('email')}
					autoComplete="email"
				/>

				<div style={{height: 30}} />

				<AppInput
					id="sign-up-password"
					label="Password"
					type={showPassword ? "text" : "password"}
					value={formValues.password}
					error={formErrors.password !== undefined}
					errorMessage={formErrors.password}
					onChange={setTextValue('password')}
					onFocus={() => clearError('password')}
					autoComplete="new-password"
					endAdornment={
						<AppInputPasswordIcon showPassword={showPassword} setShowPassword={setShowPassword}/>
					}
				/>

				<div style={{height: 30}} />

				<AppCheckbox
					id="privacy_policy"
					value={formValues.privacy_policy}
					error={formErrors.privacy_policy !== undefined}
					onChange={setCheckboxValue('privacy_policy')}
					onClick={() => clearError('privacy_policy')}
				>
					<span>I agree to the </span>
					<a href="/"><span>Terms and Conditions</span></a>
				</AppCheckbox>

				<div style={{height: 15}} />

				<div style={{display: 'flex', justifyContent: 'flex-end'}}>
					<AppButtonArrow position="right" type="submit" disabled={submitBlock}>
						Continue
					</AppButtonArrow>
				</div>
			</AppForm>

		</div>
	)
}

export default AppAuthFormSignUp
