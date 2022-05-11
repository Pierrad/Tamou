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
    height:350px;
	position: relative;
	background-color: ${props => props.theme.love};
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
	width: 100%;
    height:100%;
    border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
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
  background-color: ${(props) => props.theme.orange};
  padding: 15px;
	border: 1px solid ${(props) => props.theme.pureWhite};
`

export const DislikeButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.pureWhite};
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

export const Other = styled.View`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	align-items: center;
`

export const Label = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 18px;
  color: ${props => props.theme.backgroundInverted};
	text-transform: capitalize;
	margin-right: 5px;
    margin-top: -170px;
`

export const Value = styled.Text`
  font-family: "Poppins-Medium";
  margin-top: 60px;
  margin-left:-58px;
  font-size: 16px;
  color: ${props => props.theme.detail};
  max-width:98%;
  text-align: justify;
`

export const Button = styled(ActionButton)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  left: 5%;
	border: 1px solid ${props => props.theme.love};
`

export const styles = StyleSheet.create({
	button: {
		elevation: 5,
	}
})