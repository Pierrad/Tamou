import styled from 'styled-components/native'
import Ficon from 'react-native-vector-icons/FontAwesome5'
import { Platform } from 'react-native'

export const Container = styled.SafeAreaView`
  position: relative;
`

export const Label = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${props => props.theme.lightGrey};
  margin-bottom: 5px;
`

export const Input = styled.TextInput`
  font-family: "Poppins-Regular";
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.keyboardType === 'email-address' || props.isPassword) && props.value.length ? ((props.isEmailValid || props.isPasswordValid) ? props.theme.green : props.theme.red) : props.theme.honeydew};
  color: ${props => props.theme.backgroundInverted};
`

export const Icon = styled(Ficon)`
  position: absolute;
  right: 0;
  top: ${Platform.OS === 'ios' ? '0%' : '50%'};
`
