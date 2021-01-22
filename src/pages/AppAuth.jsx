import '../components/AppAuth/AppAuth.sass'
import { useState, useRef } from 'react'
import { CSSTransition } from "react-transition-group";
import { AuthContext } from "../components/AppAuth/auth.context"

import AppAuthForm from "../components/AppAuth/AppAuthForm"
import AppAuthEmail from "../components/AppAuth/AppAuthEmail"

import AppAlert from "../components/AppAlert"
import AppLoader from "../components/AppLoader"


const AppAuth = () => {
	const refFormStep = useRef(null)
	const refEmailStep = useRef(null)

	const [data, setData] = useState({})
	const [step, setStep] = useState('form')
	const [stepChanging, setStepChanging] = useState(false)
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState('')
	const [loading, setLoading] = useState(false)

	const changeStep = (newVal) => {
		setStepChanging(true)

		setTimeout(function () {
			setStep(newVal)
			setStepChanging(false)
		}, 300)
	}

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
			changeStep('email')
			setLoading(false)
			setData(props)
		}, 1000)
	}

	const onEmailVerification = () => {
		console.log('Send message with verification code')
	}

	const backToRegister = () => {
		changeStep('form')
	}


	const authContextValue = {
		onLogin,
		onRegister,
		backToRegister,
		onEmailVerification,
		data
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


				<CSSTransition in={stepChanging} nodeRef={refFormStep} classNames="app-auth-step" timeout={300}>
					<div ref={refFormStep}>
						{step === 'form' && <AppAuthForm/>}
					</div>
				</CSSTransition>

				<CSSTransition in={stepChanging} nodeRef={refEmailStep} classNames="app-auth-step" timeout={300}>
					<div ref={refEmailStep}>
						{step === 'email' && <AppAuthEmail/>}
					</div>
				</CSSTransition>
			</div>
		</AuthContext.Provider>
	)
}

export default AppAuth
