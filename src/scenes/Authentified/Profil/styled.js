import styled from 'styled-components/native'

import { StyleSheet } from 'react-native' 

import BasicHeader from '../../../components/BasicHeader'
import ProfilHeader from '../../../components/ProfilHeader'
import ProfilDetail from '../../../components/ProfilDetail'
import PictureInput from '../../../components/PictureInput'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
  position: relative;
`

export const Wrapper = styled.ScrollView`
  flex: 1;
  opacity: ${props => props.isModalVisible ? 0.5 : 1};
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled(BasicHeader)`
  top: 15px;
  margin: 15px 15px 30px 15px;
  height: auto;
`

export const ProfilTop = styled(ProfilHeader)`
  margin-bottom: 30px;
`

export const Divider = styled.View`
  height: 8px;
  background-color: ${props => props.theme.orange};
  opacity: 0.05;
  margin-bottom: 15px;
`

export const ProfilD = styled(ProfilDetail)`
  margin: 0px 24px;
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

export const ModalPicker = styled(PictureInput)``

export const BasicView = styled.View`
  flex: 1;
`

export const Touchable = styled.TouchableWithoutFeedback``

export const ModalStyle = StyleSheet.create({
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