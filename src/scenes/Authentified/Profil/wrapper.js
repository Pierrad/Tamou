import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ProfilScreen from './index'
import { POST_NEW_PROFIL_PICTURE } from '../../../redux/actions/user'

const ProfilScreenWrapper = (props) => {
	const { user, navigation, theme, updateProfilPicture } = props
	const { t } = useTranslation()

	const handleSubmitPicture = useCallback((picture) => {
		updateProfilPicture({ picture, token: user.token.token })
	}, [updateProfilPicture, user.token.token])

	const data = useMemo(() => ({
		headerData: {
			onButtonPress: () => navigation.goBack(),
			color: theme.backgroundInverted,
			colorInverted: theme.background,
			title: t('profil_screen_title'),
			onDotPress: () => {},
		},
		profilHeaderData: {
			avatar: user.avatar || 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
			name: user.name || t('basic_name'),
			location: user.location || t('basic_location'),
			onEditPress: handleSubmitPicture,
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
	}), [theme.backgroundInverted, theme.background, t, user.avatar, user.name, user.location, user.email, user.username, handleSubmitPicture, navigation])

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
		avatar: PropTypes.string,
		name: PropTypes.string,
		location: PropTypes.string,
		token: PropTypes.shape({
			token: PropTypes.string,
		}),
	}),
	updateProfilPicture: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	updateProfilPicture: (input) => dispatch({ type: POST_NEW_PROFIL_PICTURE, payload: input })
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilScreenWrapper)

