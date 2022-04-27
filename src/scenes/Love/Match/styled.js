import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import ActionButton from '../../../components/ActionButton'
import Link from '../../../components/Link'



export const Container = styled.SafeAreaView`
background-color: ${props => props.theme.background};
flex:1;
`
export const Linked = styled(Link)`

`

export const Button = styled(ActionButton)`
  position: relative;
  margin-right:60px;
  margin-left:60px;
  margin-top:600px;
  background-color: ${props => props.theme.love};
  border: 1px solid ${props => props.theme.love};
`

export const styles = StyleSheet.create({
	button: {
		elevation: 5,
	}
})



