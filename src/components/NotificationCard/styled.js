import styled from 'styled-components/native'

import FIcon from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.isNew ? props.theme.lightOrange : props.theme.background};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.veryLightGrey};
  transform: ${props => props.isSwiping ? 'translateX(-100px)' : 'translateX(0px)'};
`

export const Wrapper = styled.View`
  padding: 20px;
`

export const Date = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  margin-bottom: 10px;
`

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 18px;
  margin-bottom: 5px;
`

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
`

export const Options = styled.View`
  background-color: ${props => props.theme.red};
  width: 100px;
  height: 101%;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.veryLightGrey};
  opacity: 0.8;
`

export const DeleteOption = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(FIcon)``
