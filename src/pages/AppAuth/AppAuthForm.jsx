import { useState } from 'react'

import AppTabs from "../../components/AppTabs"
import AppTabControl from "../../components/AppTabControl"
import AppTabPanel from "../../components/AppTabPanel"

import AppAuthFormSignUp from "./AppAuthFormSignUp"
import AppAuthFormSignIn from "./AppAuthFormSignIn"
import AppButtonArrow from "../../components/AppButtonArrow";

const AppAuthForm = () => {
	const [currentTab, setCurrentTab] = useState(0)

	const changeCurrentTab = (newVal) => {
		setCurrentTab(newVal)
	}


	const transition = {
		transition: 300,
		transitionName: 'app-tab-panel',
		transitionDirection: true
	}

	return (
		<div>
			<AppButtonArrow position="left" href="/">
				Back
			</AppButtonArrow>

			<AppTabs value={currentTab} onChange={changeCurrentTab}>
					<AppTabControl index={0}>Sign Up</AppTabControl>
					<AppTabControl index={1}>Sign In</AppTabControl>
			</AppTabs>

			<div style={{height: '30px'}}/>

			<AppTabPanel value={currentTab} index={0} {...transition}>
				<AppAuthFormSignUp />
			</AppTabPanel>

			<AppTabPanel value={currentTab} index={1} {...transition}>
				<AppAuthFormSignIn />
			</AppTabPanel>
		</div>
	)
}

export default AppAuthForm
