import { useEffect, useState } from "react"
import useAuthContext from "./auth.context"

import { ReactComponent as AppGraphicEmailVerification } from '../../assets/img/graphics/email-verification.svg'

import AppButton from "../../components/AppButton"
import AppButtonArrow from "../../components/AppButtonArrow"

const AppAuthEmail = () => {
	const { data, backToRegister, onEmailVerification, emailSending } = useAuthContext()
	const [disabledResendEmail, setDisabledResendEmail] = useState(false)
	const [lastSeconds, setLastSeconds] = useState(0)
	const [emailInterval, setEmailInterval] = useState()

	const resendEmail = () => {
		setDisabledResendEmail(true)
		onEmailVerification()
	}

	useEffect(() => {
		onEmailVerification()
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		let timeout = null
		if (!emailSending && disabledResendEmail) {
			setLastSeconds(60)

			timeout = setInterval(() => {
				setLastSeconds((oldVal) => oldVal - 1)
			}, 1000)

			setEmailInterval(timeout)
		}

		return () => clearInterval(timeout)
	}, [emailSending, disabledResendEmail])

	useEffect(() => {
		if (lastSeconds <= 0) {
			clearInterval(emailInterval)
			setDisabledResendEmail(false)
		}
	}, [lastSeconds, emailInterval])

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

				<AppButton variant="outline" onClick={() => resendEmail()} spinner={emailSending && disabledResendEmail} disabled={disabledResendEmail}>
					Resend email {lastSeconds ? lastSeconds : ''}
				</AppButton>
			</div>

		</div>
	)
}

export default AppAuthEmail
