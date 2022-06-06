import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

import ConnectedHeader from '../../../components/ConnecterHeader'
import ActionButton from '../../../components/ActionButton'
import HomeCard from '../../../components/HomeCard'

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

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 24px;
  margin: 20px 15px 20px 15px;
  color: ${props => props.theme.backgroundInverted};
`

export const SearchInput = styled.TextInput`
  margin: 0 15px 20px 15px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Poppins-Regular";
`

export const GameList = styled.FlatList`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 10px 15px 0px 15px;
`

export const GameCard = styled(HomeCard)`
  flex: 1;
  height: 230px;
  margin-bottom: 15px;
  max-width: 200px;
`

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