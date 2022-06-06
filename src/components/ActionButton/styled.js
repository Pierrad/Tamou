import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.primary && !props.isOutlined ? props.theme.primaryButtonColor : props.theme.secondaryButtonColor} ;
  border: ${props => props.isOutlined ? `1px solid ${props.theme.primaryButtonColor}` : `1px solid ${props.theme.primaryButtonColor}`};
  border-radius: 50px;
  height: 60px;
`

export const Button = styled.TouchableHighlight`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`

export const Text = styled.Text`
  font-family: "Poppins-Bold";
  color: ${props => props.textColor ? props.textColor : (props.primary && !props.isOutlined) ? '#fff' : '#838383'};
  font-size: 18px;
`

export const Spinner = styled.ActivityIndicator``

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
