import { useEffect } from "react"
import useAuthContext from "./auth.context"

import { ReactComponent as AppGraphicEmailVerification } from '../../assets/img/graphics/email-verification.svg'

import AppButton from "../AppButton"
import AppButtonArrow from "../AppButtonArrow"

const AppAuthEmail = () => {
	const { data, backToRegister, onEmailVerification } = useAuthContext()

	useEffect(() => {
		onEmailVerification()
	}, [])

	return (
		<div>

			<AppButtonArrow
				type="button"
				theme="link"
				position="left"
				buttonProps={{
					onClick: () => backToRegister()
				}}
			>
				Back
			</AppButtonArrow>

			<h2>Email verification</h2>

			<AppGraphicEmailVerification />

			<p>
				An email has been sent to {data.email} with a link to verify your account.
				If you have not received the email after a few minutes, please check your spam folder
			</p>


			<div>
				<AppButton
					type="button"
					theme="filled"
					buttonProps={{
						onClick: () => backToRegister()
					}}
				>
					Change email
				</AppButton>

				<AppButton
					type="button"
					theme="outline"
					buttonProps={{
						onClick: () => onEmailVerification()
					}}
				>
					Resend email
				</AppButton>
			</div>

		</div>
	)
}

export default AppAuthEmail
