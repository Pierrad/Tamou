import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  background-color:#F99030;
`

export const Contain1 = styled.SafeAreaView`
  flex: 8;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  top: 200px;
  display: flex;
  align-items: center;
`

export const NameApp = styled.Text`
  font-weight: bold;
  font-weight: 900;
  font-size: 45px;
  color: white;
  text-align: center;
  position: relative;
  top: 140px;
  font-family: "Poppins-Bold";
`

export const Caption = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
  position: relative;
  top: 140px;
  font-family: "Poppins";
`

export const DotWrapper = styled.View`
  top: 40px;
  flex-direction: row;
  margin-top: 250px;
  align-items: center;
  justify-content: space-between;
`

export const Dot = styled.View`
  height: 10px;
  width: ${props => props.isSelected ? '20px' : '10px'};
  background-color: ${props => props.theme.pureWhite};
  opacity: ${props => props.isSelected ? '1' : '0.33'};
  border-radius: 20px;
  margin-right: 10px;
`

export const Text = styled.Text`
  font-size: 18px;
  color: white;
  top: -170px;
  text-align: center;
  font-family: "Poppins";
`

export const View = styled.View`
 top: 10px;
 padding: 0 30px;
`

export const Contain2 = styled.SafeAreaView`
 display: flex;
 align-items: center;
 justify-content: center;
`

export const Contain3 = styled.SafeAreaView`
`

export const ContainButton = styled.View`
  top: -50px;
  margin-left: 90px;
  margin-right: 90px;
`

export const ArrowContain = styled.View`
  background-color: #EEEEEE;
  top: -50px;
  border-radius: 50px;
  padding: 10px;
`

export const Arrow = styled(AIcon)`
`
