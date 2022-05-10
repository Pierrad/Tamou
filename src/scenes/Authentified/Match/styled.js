import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import ActionButton from '../../../components/ActionButton'
import Link from '../../../components/Link'
import AIcon from 'react-native-vector-icons/Ionicons'


export const Container = styled.SafeAreaView`
  background-color: ${props => props.color};
  position: relative;
`

export const Icon = styled(AIcon)``


export const Icon1 = styled(AIcon)`
  position: absolute;
  opacity: 0.2;
  margin-top: 200px;
  margin-left: 210px;
  transform: rotate(14.19deg);
`

export const Icon2 = styled(AIcon)`
  position: absolute;
  opacity: 0.2;
  margin-top: 110px;
  margin-left: 60px;
  transform: rotate(-14.18deg);
`

export const Icon3 = styled(AIcon)`
  position: absolute;
  opacity: 0.2;
  margin-top: 70px;
  margin-left: 280px;
  transform: rotate(14.19deg);
`

export const Icon4 = styled(AIcon)`
  position: absolute;
  opacity: 0.2;
  margin-top: 550px;
  margin-left: 30px;
  transform: rotate(14.19deg);
`

export const Icon5 = styled(AIcon)`
  position: absolute;
  opacity: 0.2;
  margin-top: 600px;
  transform: rotate(-14.18deg);
  margin-left: 250px;
`

export const Icon6 = styled(AIcon)`
 position: absolute;
 margin-top: 520px;
 opacity: 0.2;
 transform: rotate(-14.18deg);
 margin-left: 340px;
`

export const ButtonContainer = styled.SafeAreaView`
  margin-top: 400px;
  margin-left: 40px;
  margin-right: 40px;
`

export const MatchContainer = styled.SafeAreaView`
  margin-top:10px;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  left:45px;
`

export const Image1 = styled.Image`
  height: 50px;
  width: 120px;
  height: 120px;
  border-radius:70px;
  border: 7px solid #FFFFFF;
  transform: translate(20px);
`

export const Image2 = styled.Image`
  height: 50px;
  width: 120px;
  height: 120px;
  border-radius: 70px;
  border: 7px solid #FFFFFF;
  transform: translate(-20px);
`

export const LikeButton = styled.View`
  display: flex;
  justify-content: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.orange};
  padding: 20px;
  height: 70px;
  z-index: 10;
`

export const TextContainer = styled.SafeAreaView`
  margin-top:250px;
`

export const Text = styled.Text`
  color: ${props => props.textColor};
`

export const Title = styled.Text`
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`

export const Subtitle = styled.Text`
  color:white;
  text-align:center;
  font-size:15px;
  margin-top:8px;
`

export const LinkContainer = styled.SafeAreaView`
  height: 18px;
  width: 100%;
  text-align:center;
  top: -190px;
`

export const Linked = styled(Link)``

export const Button = styled(ActionButton)`
  margin-top:-270px;
  position: relative;
  background-color: ${props => props.theme.pureWhite};
  border: 1px solid ${props => props.theme.pureWhite};
`

export const styles = StyleSheet.create({
	button: {
		elevation: 5,
	}
})
