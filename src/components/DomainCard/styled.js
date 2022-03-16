import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.TouchableHighlight`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.backgroundColor};
  border-radius: 9px;
  padding: 20px;
`

export const Wrap = styled.View`
  display: flex;
  flex-direction: row;
`

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 18px;
  color: ${props => props.theme.pureWhite};
  margin-left: 17px;
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
})
