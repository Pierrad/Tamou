import styled from 'styled-components/native'
import Ficon from 'react-native-vector-icons/FontAwesome5'
import { Platform } from 'react-native'


export const Container = styled.SafeAreaView`
  position: relative;
`

export const Input = styled.TextInput`
  font-family: "Poppins";
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.honeydew}
`

export const Icon = styled(Ficon)`
  position: absolute;
  right: 0;
  top: ${Platform.OS === 'ios' ? '0%' : '50%'};
`
