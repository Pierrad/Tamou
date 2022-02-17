import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background-color:#F99030;
`
export const Head = styled.View`
padding: 100px;
`
export const Title = styled.Text`
padding:30px;
font-weight:bold;
font-weight: 800;
font-size: 24px;
line-height: 30px;
color: #000000;

`

export const Subtitle = styled.Text`
margin-top:-50px;
padding:30px;
color:#898A8D;
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
  margin-top:-60px;
  padding:30px;
  flex:5;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background: transparent;
  

  
`

export const Contain3 = styled.SafeAreaView`
flex:3;
background-color:transparent;


`

export const Contain4 = styled.SafeAreaView`
flex:3;
background-color:transparent;



`

export const Contain5 = styled.SafeAreaView`
margin-top:-20px;
flex:3;
`




