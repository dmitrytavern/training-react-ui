import './AppCheckbox.sass'
import { ReactComponent as AppIconCheck } from '../assets/img/icons/check.svg'

const AppCheckbox = ({ id, value, error, onChange, onClick, inputProps, children }) => {
	const handlerChange = (event) => {
		onChange(event)
	}

	let checkboxClassName = 'app-checkbox'
	if (error) checkboxClassName += ' app-checkbox_error'
	if (value) checkboxClassName += ' app-checkbox_checked'

	return (
		<div className={checkboxClassName}>
			<input
				id={id}
				type="checkbox"
				value={value}
				hidden="hidden"
				onChange={handlerChange}
				onClick={onClick}

				{...inputProps}
			/>

			<label htmlFor={id} className="app-checkbox__label">
				<span className="app-checkbox__box">
					<span className="app-checkbox__box-icon">
						<AppIconCheck />
					</span>
				</span>

				<span>
					{children}
				</span>
			</label>
		</div>
	)
}

export default AppCheckbox
