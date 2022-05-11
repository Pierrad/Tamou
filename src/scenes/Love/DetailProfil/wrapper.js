import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import DetailScreen from './index'

const DetailProfileWrapper = (props) => {
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
		nameAndAge: 'Reza E Prasetyo, 26',
		image: 'https://s3-alpha-sig.figma.com/img/217b/6897/790fbb7f6df024c7369f8364bfe5fe63?Expires=1653264000&Signature=Gyl9rd1FBPRS-OUKBHDu2GRLexobco194PDJti6jPtvfPc0X4Td~sz5Q1yTgLjluuC1-az1jxQFt4HvkzZdpnOekbo92rV-3HmjvSEP-2SRvu8SEiyF88dVfUCJ2Ibsozb1m3lPZkhMzgnDq1DC~RevsqEyYD5kG29BDd8w2yjmBNB60~-HYfIxRmttWjqUmGfSH334dzTiL8vxX5NVMUWgO0xnXFfktS7CEhxJy3lmMFbsPQ~HN0NGKuQKcI3RkskpAu4vFcDozj-8qXGXwXDfBoO9NDXDrQKndp5HwoqhjfrmB-lWrcbrKbydS6nGbgysreqvnby1eWdmWY7C2wA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		others: {
			about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus lacus in quam laoreet, eget finibus orci pharetra. Sed molestie leo eget urna egestas tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec luctus tortor, at sagittis orci.',
		},
	}

	return (
		<DetailScreen
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

DetailProfileWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProfileWrapper)

