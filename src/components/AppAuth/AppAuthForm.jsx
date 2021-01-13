import { useState } from 'react'

import AppTabs from "../AppTabs"
import AppTabsBar from "../AppTabsBar"
import AppTabControl from "../AppTabControl"
import AppTabPanel from "../AppTabPanel"
import AppAuthFormSignUp from "./AppAuthFormSignUp"
import AppAuthFormSignIn from "./AppAuthFormSignIn"

const AppAuthForm = () => {
	const [currentTab, setCurrentTab] = useState(0)

	const changeCurrentTab = (_, newVal) => {
		setCurrentTab(newVal)
	}

	return (
		<div style={{ maxWidth: "440px", padding: '30px'}}>

			<AppTabs
				value={currentTab}
				onChange={changeCurrentTab}
				transition={300}
				transitionName={'app-tab-panel'}
			>
				<AppTabsBar>
					<AppTabControl index={0}>Sign Up</AppTabControl>
					<AppTabControl index={1}>Sign In</AppTabControl>
				</AppTabsBar>

				<div style={{height: '30px'}}/>

				<AppTabPanel index={0}>
					<AppAuthFormSignUp />
				</AppTabPanel>

				<AppTabPanel index={1}>
					<AppAuthFormSignIn />
				</AppTabPanel>
			</AppTabs>

		</div>
	)
}

export default AppAuthForm
