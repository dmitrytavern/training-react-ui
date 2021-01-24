import './AppCheckbox.sass'
import clsx from 'clsx'
import classes from './classes'
import PropTypes from 'prop-types'
import { ReactComponent as AppIconCheck } from '../../assets/img/icons/check.svg'

const AppCheckbox = (props) => {
	const { id, value, error, onChange, onClick } = props

	const handlerKeyDown = (e) => {
		if (e.key === 'Enter') {
			onChange()
		}
	}


	/* Class naming */

	const boxClassName = clsx({
		[classes.box]: true,
		[classes.boxError]: error
	})

	const iconClassName = clsx({
		[classes.icon]: true,
		[classes.iconChecked]: value
	})

	return (
		<div className={classes.root}>
			<input
				id={id}
				type="checkbox"
				value={value}
				hidden="hidden"
				onChange={onChange}
				onClick={onClick}

				{...props.inputProps}
			/>

			<label
				htmlFor={id}
				className={classes.label}
				onKeyDown={handlerKeyDown}
				tabIndex={0}
			>
				<span className={boxClassName}>
					<span className={iconClassName}>
						<AppIconCheck />
					</span>
				</span>

				<span>
					{props.children}
				</span>
			</label>
		</div>
	)
}

AppCheckbox.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	onClick: PropTypes.func,
	error: PropTypes.bool,
	inputProps: PropTypes.object
}

export default AppCheckbox
