import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background: black;
`

export const Text = styled.Text`
font-size: 16px;
line-height: 20px;
color: #898A8D;
top:40px;
`
export const Contain = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  marginTop: 200px ;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background:white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Title = styled.Text`
top: 20px;
font-weight:bold;
font-weight: 800;
font-size: 24px;
line-height: 30px;
color: #000000;

`


