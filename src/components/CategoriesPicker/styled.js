import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'

import ToggleButtonC from '../ToggleButton'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
`

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 45px;
  color: ${(props) => props.theme.pureWhite};
  margin-top: 50px;
`

export const Buttons = styled.View`
  flex: 1;
  width: 90%;
  justify-content: space-evenly;
  margin: 0px 20px 50px 20px;
`

export const ToggleButtonWrap = styled.View`
  display: flex;
  width: 100%;
  align-items: ${props => props.isOdd ? 'flex-start' : 'flex-end'};
`

export const ToggleButton = styled(ToggleButtonC)``

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.pureWhite};
  padding: 10px;
  position: absolute;
  top: 92%;
  right: 6%;
`

export const Icon = styled(AIcon)``
