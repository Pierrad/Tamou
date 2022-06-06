import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'

import * as SC from './styled'

const HomeScreen = ({ theme }) => (
	<SC.Container>
		<ActivityIndicator size="large" color={theme.orange} />
	</SC.Container>
)

HomeScreen.propTypes = {
	theme: PropTypes.object,
}

const mapStateToProps = (state) => ({
	theme: state?.themeReducer?.theme
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


