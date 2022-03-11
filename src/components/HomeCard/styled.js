import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
  width: auto;
  height: auto;
`

export const ImageWrapper = styled.TouchableOpacity`
  width: auto;
  height: auto;
`

export const Image = styled.Image`
  width: 165px;
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

