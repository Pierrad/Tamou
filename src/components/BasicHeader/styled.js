import styled from 'styled-components/native'
import FIcon from 'react-native-vector-icons/Feather'

import ActionButton from '../ActionButton'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Button = styled(ActionButton)`
  background-color: ${props => props.theme.red};
  width: 20px;
`

export const ChevronLeft = styled(FIcon)``

export const Title = styled.Text`
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color || props.theme.pureWhite};
`