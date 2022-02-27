import styled from 'styled-components/native'
import FIcon from 'react-native-vector-icons/Feather'
import EIcon from 'react-native-vector-icons/Entypo'

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Button = styled.TouchableHighlight`
  height: 37px;
  width: 37px;
  border-radius: 50px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChevronLeft = styled(FIcon)``

export const Title = styled.Text`
  font-family: 'Poppins';
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.color || props.theme.pureWhite};
  margin-left: 40px;
`

export const MenuIcon = styled(EIcon)``