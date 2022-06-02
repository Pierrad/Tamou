import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import FIcon from 'react-native-vector-icons/Feather'
import AIcon from 'react-native-vector-icons/AntDesign'
import IIcon from 'react-native-vector-icons/Ionicons'

import ActionButton from '../../../components/ActionButton'


export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
  position: relative;
`

export const Wrapper = styled.View`
	position: relative;
  padding: 15px;
	background-color: ${props => props.theme.game};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
`

export const IconBox = styled.View`
	position: absolute;
	top: 20px;
	left: 20px;
  border-radius: 30px;
  background-color: ${props => props.theme.pureWhite};
	width: 30px;
`

export const LeftIcon = styled(FIcon)`
  width: 30px;
  height: 30px;
  margin-top: 1px;
`

export const Image = styled.Image`
	margin-top: 50px;
	margin-bottom: 50px;
	width: 200px;
	height: 200px;
`

export const TagLine = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 20px;
  color: ${props => props.theme.pureBlack};
  margin-top: 5px;
`

export const Buttons = styled.View`
	position: absolute;
	width: 100%;
	bottom: -25px;
  justify-content: space-evenly;
  flex-direction: row;
`

export const LikeButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.game};
  padding: 15px;
	border: 1px solid ${(props) => props.theme.pureWhite};
`

export const DislikeButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.refuse};
  padding: 15px;
	border: 1px solid ${(props) => props.theme.pureWhite};
`

export const Icon = styled(AIcon)``

export const Icon2 = styled(IIcon)``

export const Content = styled.ScrollView`
  margin: 35px 15px 20px 15px;
`

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 24px;
  color: ${props => props.theme.backgroundInverted};
`

export const Game = styled.View`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
  position: relative;
`

export const Field = styled.View`
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

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.backgroundInverted};
  margin: 10px 0px;
`

export const Badge = styled.Image`
  position: absolute;
  top: -5px;
  right: 20px;
  width: 75px;
  height: 75px;
`

export const Button = styled(ActionButton)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  left: 5%;
	border: 1px solid ${props => props.theme.game};
`

export const styles = StyleSheet.create({
	button: {
		elevation: 5,
	}
})