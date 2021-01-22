import { useState } from 'react'
import { AuthContext } from "../components/AppAuth/auth.context"

import AppAlert from "../components/AppAlert"
import AppLoader from "../components/AppLoader"
import AppAuthForm from "../components/AppAuth/AppAuthForm"

const AppAuth = () => {
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState('')
	const [loading, setLoading] = useState(false)

	const onLogin = () => {
		setLoading(true)

		setTimeout(() => setLoading(false), 1000)
	}

	const onRegister = () => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			setError(true)
			setErrorText('404: Page not found.')
		}, 1000)
	}


	const authContextValue = {
		onLogin,
		onRegister
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
				<AppAuthForm />
			</div>
		</AuthContext.Provider>
	)
}

export default AppAuth
