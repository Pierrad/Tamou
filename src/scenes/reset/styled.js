import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background-color:#F99030;
`
export const Head = styled.View`
padding: 150px;
`
export const Title = styled.Text`
padding:60px;
font-weight:bold;
font-weight: 800;
font-size: 24px;
line-height: 30px;
color: #000000;

`



export const Text = styled.Text`
font-size: 16px;
line-height: 20px;
color: #898A8D;
text-align:center;
`
export const Contain1 = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background:white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  
  
`

export const Contain2 = styled.SafeAreaView`
  flex:3;
  margin-top:-30px
  margin-left: -30px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background: transparent;
  

  
`

export const Contain3 = styled.SafeAreaView`
margin-left: 30px;
flex:4;
margin-top:-200px;
background-color:transparent;


`

export const Contain4 = styled.SafeAreaView`
flex:1;
margin-top:-200px;
background-color:transparent;


`
