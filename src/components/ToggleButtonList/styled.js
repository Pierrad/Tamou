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
  font-family: 'Poppins';
  font-weight: 800;
  font-size: 25px;
  color: ${(props) => props.theme.pureWhite};
  margin: 30px 20px;
`

export const Buttons = styled.View`
  flex: 1;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
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
  right: 10%;
`

export const Icon = styled(AIcon)``
