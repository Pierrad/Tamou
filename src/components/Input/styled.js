import styled from 'styled-components/native'
import Ficon from 'react-native-vector-icons/FontAwesome5'
import { Platform } from 'react-native'


export const Container = styled.SafeAreaView`
  position: relative;
`

export const Label = styled.Text`
  font-family: 'Poppins';
  font-size: 14px;
  color: ${props => props.theme.lightGrey};
  margin-bottom: 5px;
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
