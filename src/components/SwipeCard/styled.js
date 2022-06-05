import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
	border-radius: 10px;
`

export const Title = styled.Text`
	position: absolute;
	bottom: 5%;
	left: 5%;
	font-family: 'Poppins-Bold';
	font-size: 20px;
	color: ${props => props.theme.pureWhite};
`

export const Subtitle = styled.Text`
	position: absolute;
	bottom: 2%;
	left: 5%;
	font-family: 'Poppins-Regular';
	font-size: 14px;
	color: ${props => props.theme.pureWhite};
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
	color: ${props => props.theme.pureWhite};
`

export const styles = StyleSheet.create({
	card: {
		width: 350,
		height: 540,
		borderRadius: 20,
		position: 'relative',
	}
})




