import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const LoveDashboardScreen = ({ theme }) => {

	const cards = [
		{
			text: 'Ben',
			image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
			onPress: () => {},
		},
		{
			text: 'Julia',
			image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
			onPress: () => {},
		},
		{
			text: 'Robert',
			image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
			onPress: () => {},
		},
		{
			text: 'Catherine',
			image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
			onPress: () => {},
		},
		{
			text: 'Tom',
			image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
			onPress: () => {},
		},
		{
			text: 'Alex',
			image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
			onPress: () => {},
		},
		{
			text: 'Yin',
			image: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
			onPress: () => {},
		},
		{
			text: 'Huguette',
			image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
			onPress: () => {},
		}
	]

	const renderMatchCard = ({ item }) => (
		<SC.MatchCard
			text={item.text}
			image={item.image}
			onPress={item.onPress}
		/>
	)

	return (
		<SC.Container>
			<SC.Header 
				title="Rencontre"
				onBurgerPress={() => {}}
				onParametersPress={() => {console.log('')}}
				theme={theme}
			/>
			<SC.Title>Vos matchs</SC.Title>
			<SC.MatchList
				data={cards}
				renderItem={renderMatchCard}
				numColumns={2}
				contentContainerStyle={SC.styles.flatList}
			/>
			<SC.Button
				title="Swippez"
				onPress={() => {}}
				underlayColor={theme.love}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
		</SC.Container>
	)
}

LoveDashboardScreen.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
}

export default LoveDashboardScreen