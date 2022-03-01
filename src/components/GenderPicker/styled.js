import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Title = styled.Text`
  font-family: 'Poppins';
  font-weight: 800;
  font-size: 45px;
  color: ${(props) => props.theme.pureWhite};
`

export const Pickers = styled.View`
  flex: 2;
`

export const Picker = styled.TouchableOpacity`
  border: 1px solid #e6e6e6;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
`

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`