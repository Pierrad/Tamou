import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background};
`

export const Head = styled.View`
  padding: 200px 0px 150px 0px;
  background-color: ${props => props.theme.orange};
`

export const Head2 = styled.View`
  padding: 100px 0px 200px 0px;
  background-color: ${props => props.theme.orange};
`

export const NameApp = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 45px;
  color: ${props => props.theme.pureWhite};
  text-align: center;
  position: relative;
`

export const Caption = styled.Text`
  font-family: "Poppins-Italic";
  color: ${props => props.theme.pureWhite};
  text-align: center;
  font-size: 15px;
  position: relative;
`

export const Contain1 = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  top: -30px;
`

export const Contain2 = styled.SafeAreaView`
  margin: 30px 30px 0px 30px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: ${props => props.theme.pureBlack};
  margin-bottom: 15px;
`

export const Subtitle = styled.Text`
  font-family: "Poppins-Regular";
  color: #898A8D;
`

export const Contain3 = styled.SafeAreaView`
  flex: 6;
  justify-content: space-evenly;
  margin: 0px 30px 0px 30px;
  background-color: transparent;
`

export const Contain4 = styled.SafeAreaView`
  flex:2;
  margin: 0px 30px 0px 30px;
  background-color:transparent;
`

export const Text = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #898A8D;
  text-align:center;
`
