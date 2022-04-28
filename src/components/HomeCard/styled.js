import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign'

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
  width: auto;
  height: auto;
`

export const ImageWrapper = styled.TouchableOpacity`
  width: auto;
  height: auto;
  position: relative;
`

export const Image = styled.Image`
  width: 85%;
  height: 100%;
  border-radius: 10px;
`

export const Text = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 14px;
  color: #fff;
  position: absolute;
  bottom: 5%;
  left: 5%;
`

export const SelectBox = styled.View`
  position: absolute;
  top: 5%;
  right: 20%;
  z-index: 10;
`

export const SelectIcon = styled(AIcon)``

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
