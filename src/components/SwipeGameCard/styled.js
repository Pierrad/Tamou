import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Image = styled.Image`
  width: 150px;
  height: 150px;
	margin-bottom: 150px;
`

export const Profil = styled.View`
	position: absolute;
	bottom: 10%;
	left: 9%;
`

export const Title = styled.Text`
	font-family: 'Poppins-Bold';
	font-size: 20px;
	color: ${props => props.theme.pureBlack};
`

export const Subtitle = styled.Text`
	font-family: 'Poppins-Regular';
	font-size: 16px;
	color: ${props => props.theme.pureBlack};
`

export const Game = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Label = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 18px;
  color: ${props => props.theme.backgroundInverted};
	text-transform: uppercase;
	margin-right: 5px;
`

export const Value = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 16px;
  color: ${props => props.theme.game};
`

export const Like = styled.View`
	position: absolute;
	top: 5%;
	left: 5%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.green};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 5px;
`

export const Dislike = styled.View`
	position: absolute;
	top: 5%;
	right: 5%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.red};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 5px;
`

export const Profile = styled.View`
	position: absolute;
	top: 5%;
	right: 30%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.game};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 5px;
`

export const Text = styled.Text`
	font-family: 'Poppins-Bold';
	font-size: 20px;
	color: ${props => props.theme.pureBlack};
`

export const styles = StyleSheet.create({
	card: {
		width: 350,
		height: 460,
		borderRadius: 50,
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#8A9DFF',
		borderWidth: 1,
	}
})




