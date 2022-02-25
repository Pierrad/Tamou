import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProfilScreen from './index'

const ProfilScreenWrapper = (props) => {
	const { user, navigation, theme } = props


	const data = useMemo(() => ({
		headerData: {
			onButtonPress: () => navigation.goBack(),
			color: theme.backgroundInverted,
			colorInverted: theme.background,
			title: 'Profil',
		},
		profilHeaderData: {
			avatar: user.imageProfile || 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
			name: user.name || 'John Doe',
			location: user.location || 'Nice, France',
		},
		profilDetailData: {
			title: 'À propos',
			fields: [
				{
					label: 'Nom',
					value: user.name || 'John Doe',
					isEditable: true,
				},
				{
					label: 'Email',
					value: user.email,
					isEditable: true,
				},
				{
					label: 'Username',
					value: user.username,
					isEditable: true,
				},
				{
					label: 'Phrase d’accroche',
					value: 'fmermffnejznrzf',
					isEditable: true,
				},
			]
		},
	}), [user, navigation, theme])

	return (
		<ProfilScreen {...data} />
	)
}

ProfilScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		imageProfile: PropTypes.string,
		name: PropTypes.string,
		location: PropTypes.string,
	}),
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilScreenWrapper)

