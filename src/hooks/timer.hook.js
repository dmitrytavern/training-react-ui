import { useState, useEffect } from "react"

const useTimer = () => {
	const [seconds, setSeconds] = useState(0)
	const [timerInterval, setTimerInterval] = useState()
	const [disabled, setDisabled] = useState(false)

	const setTimer = (number) => {
		setSeconds(number)
		setDisabled(true)
		setTimerInterval(setInterval(() => {
			setSeconds(oldVal => oldVal - 1)
		}, 1000))
	}

	useEffect(() => {
		if (seconds <= 0) {
			clearInterval(timerInterval)
			setDisabled(false)
		}
	}, [seconds, timerInterval])

	return {
		setTimer,
		seconds,
		disabled
	}
}

export default useTimer