import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'

import ToggleButtonC from '../ToggleButton'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const TitleWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 25px;
  color: ${(props) => props.theme.pureWhite};
  margin: 30px 20px;
`

export const Buttons = styled.ScrollView`
  flex: 1;
  width: 90%;
  margin-bottom: 50px;
`

export const ToggleButton = styled(ToggleButtonC)`
  margin-bottom: 20px;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.pureWhite};
  padding: 10px;
  position: absolute;
  top: 92%;
  right: 10%;
`

export const Icon = styled(AIcon)``

export const styles = StyleSheet.create({
	buttons: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})
