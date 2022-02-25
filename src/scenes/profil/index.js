import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as SC from './styled'

const ProfilScreen = ({ navigation, theme }) => {
	return (
		<SC.Container>
			<SC.Content>
				<SC.Header
					onButtonPress={() => navigation.goBack()}
					color={theme.pureBlack}
					title="Profil"
				/>
			</SC.Content>
		</SC.Container>
	)
}

ProfilScreen.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilScreen)


