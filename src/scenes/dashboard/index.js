import React from 'react'
import { connect } from 'react-redux'
import ConnectedHeader from '../../components/ConnecterHeader'

import * as SC from './styled'

const DashboardScreen = () => (
	<SC.Container>
		<ConnectedHeader 
			title="Bonjour PA"
			onBurgerPress={() => {}}
			onNotificationPress={() => {}}
			numberOfNotification={0}
			onAvatarPress={() => {}}
			avatar="https://reactnative.dev/img/tiny_logo.png"
		/>
	</SC.Container>
)

DashboardScreen.propTypes = {}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)


