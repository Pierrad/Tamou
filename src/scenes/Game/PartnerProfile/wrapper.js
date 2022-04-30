import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import PartnerProfile from './index'

const PartnerProfileWrapper = (props) => {
	const { theme, navigation } = props
	const { t } = useTranslation()

	const translations = {
		cta: t('game_partner_profile_cta_label'),
	}

	const goBack = () => {
		navigation.goBack()
	}

	const onLike = () => {
		console.log('onLike')
	}

	const onDislike = () => {
		console.log('onDislike')
	}

	const user = {
		name: '@The_Lion_Vassal',
		rank: require('../../../assets/images/lol/bronze.png'),
		others: {
			position: ': Mid',
			type: ': Rageux',
			personnage: ': Talon',
		},
	}

	return (
		<PartnerProfile
			theme={theme}
			translations={translations}
			goBack={goBack}
			user={user}
			isInSwipeMode={true}
			onLike={onLike}
			onDislike={onDislike}
		/>
	)
}

PartnerProfileWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PartnerProfileWrapper)

