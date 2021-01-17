import { useState } from 'react'
import { AuthContext } from "../components/AppAuth/auth.context"

import AppLoader from "../components/AppLoader"
import AppAuthForm from "../components/AppAuth/AppAuthForm"

const AppAuth = () => {
	const [loading, setLoading] = useState(false)

	const onLogin = (props) => {
		setLoading(true)

		setTimeout(() => setLoading(false), 1000)
	}

	const onRegister = (props) => {
		setLoading(true)

		setTimeout(() => setLoading(false), 1000)
	}


	const authContextValue = {
		onLogin,
		onRegister
	}

	return (
		<AuthContext.Provider value={authContextValue}>
			<div style={{ maxWidth: "440px", padding: '30px', position: 'relative'}}>
				<AppLoader loading={loading} />
				<AppAuthForm />
			</div>
		</AuthContext.Provider>
	)
}

export default AppAuth
