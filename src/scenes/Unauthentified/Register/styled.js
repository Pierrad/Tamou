import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${props => props.theme.background};
`

export const Head = styled.View`
  padding: 60px 0px 60px 0px;
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
  background-color: ${props => props.theme.pureWhite};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  top: -60px;
  position: relative;
`

export const Contain2 = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.pureWhite};
  margin: 30px 30px 15px 30px;
`

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 24px;
  color: #000000;
`

export const Subtitle = styled.Text`
  font-family: "Poppins-Regular";
  color: #898A8D;
`

export const Contain3 = styled.SafeAreaView`
  flex: 9;
  justify-content: space-evenly;
  margin: 0px 30px 0px 30px;
  background-color: transparent;
`

export const Contain4 = styled.SafeAreaView`
  flex: 2;
  margin: 0px 30px 0px 30px;
  background-color: transparent;
`

export const Contain5 = styled.SafeAreaView`
  flex: 1;
`

export const Hide = styled.View`
  position: absolute;
  bottom: -10%;
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.pureWhite};
`

export const Text = styled.Text`
  font-family: "Poppins-Regular";
  font-size: 16px;
  line-height: 20px;
  color: #898A8D;
  text-align:center;
`

export const style = StyleSheet.create({
	container: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	contain: {
		zIndex: 10,
		elevation: 10,
	}
})


