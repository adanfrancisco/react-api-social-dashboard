import React, { Fragment } from 'react'
import './App.css'

// components
import Header from './components/Header'
import Switch from './components/Switch'
import TopCardList from './components/TopCardList'
import Overview from './components/Overview'

function App() {
	return (
		<Fragment>
			<Header>
				<Switch />
			</Header>
			<TopCardList />
			<Overview />
		</Fragment>
	)
}

export default App
