import { useEffect } from "react"
import useAuthContext from "./auth.context"
import useTimer from "../../hooks/timer.hook"

import { ReactComponent as AppGraphicEmailVerification } from '../../assets/img/graphics/email-verification.svg'

import AppButton from "../../components/AppButton"
import AppButtonArrow from "../../components/AppButtonArrow"

const AppAuthEmail = () => {
	const { setTimer, seconds, disabled } = useTimer()
	const { data, backToRegister, onEmailVerification, emailSending } = useAuthContext()


	const resendEmail = () => {
		setTimer(60)
		onEmailVerification()
	}

	useEffect(() => {
		onEmailVerification()
		// eslint-disable-next-line
	}, [])

	return (
		<div>

			<AppButtonArrow position="left" onClick={() => backToRegister()}>
				Back
			</AppButtonArrow>

			<h2>Email verification</h2>

			<AppGraphicEmailVerification />

			<p>
				An email has been sent to {data.email} with a link to verify your account.
				If you have not received the email after a few minutes, please check your spam folder
			</p>


			<div>
				<AppButton variant="filled" onClick={() => backToRegister()}>
					Change email
				</AppButton>

				<AppButton variant="outline" onClick={() => resendEmail()} spinner={emailSending && disabled} disabled={disabled}>
					Resend email {seconds ? seconds : ''}
				</AppButton>
			</div>

		</div>
	)
}

export default AppAuthEmail
