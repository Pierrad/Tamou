import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

import ActionButton from '../../../components/ActionButton'
import BasicHeader from '../../../components/BasicHeader'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
  position: relative;
`

export const Wrapper = styled.ScrollView`
  flex: 1;
  opacity: ${props => props.isModalVisible ? 0.1 : 1};
`

export const Content = styled.View`
  flex: 1;
  padding: 0 15px;
`

export const Header = styled(BasicHeader)`
  top: 15px;
  margin: 15px 15px 30px 15px;
  height: auto;
`

export const Text = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: -40px;
`

export const Button = styled(ActionButton)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  left: 5%;
  background-color: ${props => props.theme.refuse};
  border: 1px solid ${props => props.theme.refuse};
`

export const Modal = styled.Modal``

export const ModalView = styled.View`
  background-color: ${props => props.theme.pureWhite};
  width: 80%;
  height: 200px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 10%;
  border-radius: 10px;
`

export const BasicView = styled.View`
  flex: 1;
`

export const Touchable = styled.TouchableWithoutFeedback``

export const ModalTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 20px;
`

export const ModalButton = styled(ActionButton)`
  background-color: ${props => props.theme.refuse};
  border: 1px solid ${props => props.theme.refuse};
  width: 80%;
  margin-top: 20px;
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