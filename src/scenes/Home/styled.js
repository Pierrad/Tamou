import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.primaryTextColor};
`