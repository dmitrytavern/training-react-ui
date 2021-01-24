import './AppAuth.sass'
import { useState } from 'react'
import { AuthContext } from "./auth.context"

import AppTabPanel from "../../components/AppTabs/AppTabPanel"
import AppAlert from "../../components/AppAlert/AppAlert"
import AppLoader from "../../components/AppLoader/AppLoader"

import AppAuthForm from "./AppAuthForm"
import AppAuthEmail from "./AppAuthEmail"


const AppAuth = () => {
	const [data, setData] = useState({})
	const [step, setStep] = useState(0)
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState('')
	const [loading, setLoading] = useState(false)

	const onLogin = () => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			setError(true)
			setErrorText('The email/password combination used was not found on the system.')
		}, 1000)
	}

	const onRegister = (props) => {
		setLoading(true)

		setTimeout(() => {
			setStep(1)
			setLoading(false)
			setData(props)
		}, 1000)
	}

	const onEmailVerification = () => {
		console.log('Send message with verification code')
	}

	const backToRegister = () => {
		setStep(0)
	}


	const authContextValue = {
		onLogin,
		onRegister,
		backToRegister,
		onEmailVerification,
		data
	}

	const transition = {
		transition: 300,
		transitionName: 'app-auth-step',
	}

	return (
		<AuthContext.Provider value={authContextValue}>
			{/* Error alert */}
			<AppAlert
				type="danger"
				show={error}
				content={errorText}
				onClose={() => setError(false)}
			/>


			{/* Form */}
			<div style={{ maxWidth: "440px", padding: '30px', position: 'relative'}}>
				<AppLoader loading={loading} />


				<AppTabPanel value={step} index={0} {...transition}>
					<AppAuthForm />
				</AppTabPanel>

				<AppTabPanel value={step} index={1} {...transition}>
					<AppAuthEmail />
				</AppTabPanel>

			</div>
		</AuthContext.Provider>
	)
}

export default AppAuth