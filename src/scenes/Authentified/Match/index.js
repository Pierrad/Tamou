import React from 'react'
import PropTypes from 'prop-types'
import ConnectedHeader from '../../../components/ConnecterHeader'
import Link from '../../../components/Link'
import * as SC from './styled'


const MatchScreen = (props) => {
	const { theme, translations, onButtonPress, user1, user2, color, icon } = props
	
	return (
		<SC.Container color={color}>
			<SC.Icon1 name={icon} size={35} color="#FFF" />
			<SC.Icon2 name={icon} size={50} color="#FFF" />
			<SC.Icon3 name={icon} size={60} color="#FFF" />
			<SC.Icon4 name={icon} size={40} color="#FFF" />
			<SC.Icon5 name={icon} size={45} color="#FFF" />
			<SC.Icon6 name={icon} size={30} color="#FFF" />
			<SC.TextContainer>
				<SC.Title>
					Match🎉
				</SC.Title>
				<SC.Subtitle>
					Vous vous êtes liké ! 
				</SC.Subtitle>
			</SC.TextContainer>
			<SC.MatchContainer>
				<SC.Image1 source={{uri: user1}} alt="PictureUser" />
				<SC.LikeButton
					underlayColor='#fff'
				>
					<SC.Icon name={icon} size={30} color="#FFF" />
				</SC.LikeButton>
				<SC.Image2 source={{uri: user2}} alt="PictureCurrentUser" />
			</SC.MatchContainer>
			<SC.ButtonContainer>
				<SC.Button
					title={translations.title}
					onPress={onButtonPress}
					underlayColor={color}
					textColor={theme.orange}
					style={SC.styles.button}
				/>
				
			</SC.ButtonContainer>
			<SC.LinkContainer>
				<Link
					title={translations.continueSwipeButtonAction}
					onPress= {onButtonPress}
					underlayColor="none"
					textColor={theme.pureWhite}
				/>
			</SC.LinkContainer>
		</SC.Container>
	)
}

MatchScreen.propTypes = {
	theme: PropTypes.object,
	color: PropTypes.string,
	icon: PropTypes.string,
	translations: PropTypes.objectOf(PropTypes.string),
	onButtonPress: PropTypes.func,
	headerData: PropTypes.shape(ConnectedHeader.propTypes),
	textColor: PropTypes.string,
	user1: PropTypes.string,
	user2: PropTypes.string,
}

export default MatchScreen