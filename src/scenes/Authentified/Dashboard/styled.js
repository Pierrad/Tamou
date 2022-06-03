import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

import ActionButton from '../../../components/ActionButton'
import ConnectedHeader from '../../../components/ConnecterHeader'
import DomainCard from '../../../components/DomainCard'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
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
  margin: 20px 15px 10px 15px;
  color: ${props => props.theme.backgroundInverted};
`

export const CardList = styled.View`
  margin: 20px 15px 10px 15px;
`

export const DCard = styled(DomainCard)`
  margin-bottom: 20px;
`

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 5%;
  right: 5%;
  left: 5%;
  width: 100%;
`

export const PrincipalButton = styled(ActionButton)`
  width: 65%;
  background-color: ${props => props.theme.orange};
  border: 1px solid ${props => props.theme.orange};
  margin-right: 20px;
`

export const SecondaryButton = styled(ActionButton)`
  width: 20%;
  background-color: ${props => props.theme.orange};
  border: 1px solid ${props => props.theme.orange};
`

export const styles = StyleSheet.create({
	flatList: {
		flex: 1,
		display: 'flex',
	},
	button: {
		elevation: 5,
	},
	modalView: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
})