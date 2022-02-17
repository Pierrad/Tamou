import React from 'react'
import store from './redux/store'
import { Provider as ReduxProvider } from 'react-redux'

import Layout from './scenes/layout'

const App = () => (
	<ReduxProvider store={store}>
		<Layout />
	</ReduxProvider>
)

export default App