import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ProfilScreen from './index'

const ProfilScreenWrapper = (props) => {
	const { user, navigation, theme } = props
	const { t } = useTranslation()

	const data = useMemo(() => ({
		headerData: {
			onButtonPress: () => navigation.goBack(),
			color: theme.backgroundInverted,
			colorInverted: theme.background,
			title: t('profil_screen_title'),
			onDotPress: () => {},
		},
		profilHeaderData: {
			avatar: user.imageProfile || 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
			name: user.name || t('basic_name'),
			location: user.location || t('basic_location'),
		},
		profilDetailData: {
			title: t('profil_screen_subtitle'),
			fields: [
				{
					label: t('profil_screen_name_field_label'),
					value: user.name || 'John Doe',
				},
				{
					label: t('profil_screen_email_field_label'),
					value: user.email,
				},
				{
					label: t('profil_screen_username_field_label'),
					value: user.username,
				},
				{
					label: t('profil_screen_catchphrase_field_label'),
					value: 'fmermffnejznrzf',
				},
			]
		},
	}), [theme.backgroundInverted, theme.background, t, user.imageProfile, user.name, user.location, user.email, user.username, navigation])

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

