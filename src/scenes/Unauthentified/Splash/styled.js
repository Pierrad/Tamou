import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background-color:#F99030;

`
export const Text = styled.Text`
  font-size: 20px;
  color:black;
  top:-200px;
  text-align:center;
`

export const View = styled.View`
 top:-30px;
`
export const ArrowContain = styled.View`
background-color:#EEEEEE;
top:-50px;
width:50px;

border-radius:50px;
margin-left:170px;
 
`
export const Contain2 = styled.SafeAreaView`

`
export const Contain3 = styled.SafeAreaView`
`
export const ContainButton = styled.View`
top:-50px;
margin-left:90px;
margin-right:90px;
`

export const NameApp = styled.Text`
  font-weight:bold;
  font-weight:900;
  font-size:45px;
  color: white;
  text-align: center;
  position: relative;
  top:140px;
`

export const Caption = styled.Text`
  color: grey;
  text-align: center;
  font-size:15px;
  font-style:italic;
  font-weight:normal;
  position: relative;
  top:140px;
`

export const Arrow = styled(AIcon)`
 
`


export const Contain1 = styled.SafeAreaView`
  flex:8;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  top:200px;
`


export const DotWrapper = styled.View`

  top:70px;
  width:50px;
  margin-left:170px;
  flex-direction:row;
  margin-top:250px;
  align-items:center;
  justify-content: space-between;
`

export const Dot = styled.View`
  height: 10px;
  width: 10px;
  background-color: #EEEEEE;
  border-radius: 20px;
  
`
