import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import IIcon from 'react-native-vector-icons/Ionicons'

import ConnectedHeader from '../../../components/ConnecterHeader'
import PlayerCard from '../../../components/PlayerCard'
import ActionButton from '../../../components/ActionButton'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
  position: relative;
`

export const Header = styled(ConnectedHeader)`
  position: static;
  top: 15px;
  margin: 15px;
  height: auto;
`

export const Box = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  margin: 30px 15px 10px 15px;
`

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 24px;
  color: ${props => props.theme.backgroundInverted};
`

export const Icon = styled(IIcon)`
  width: 24px;
  height: 24px;
  margin-top: 1px;
`

export const SearchInput = styled.TextInput`
  font-family: "Poppins-Regular";
  color: ${props => props.theme.backgroundInverted};
  width: 90%;
  font-size: 16px;
`

export const Partners = styled.View`
  padding: 10px 15px;
`

export const Card = styled(PlayerCard)``

export const Button = styled(ActionButton)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  left: 5%;
  background-color: ${props => props.theme.game};
  border: 1px solid ${props => props.theme.game};
`

export const styles = StyleSheet.create({
	flatList: {
		flex: 1,
		display: 'flex',
	},
	button: {
		elevation: 5,
	}
})