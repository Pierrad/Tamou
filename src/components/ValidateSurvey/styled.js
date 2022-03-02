import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'


export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
`

export const Title = styled.Text`
  font-family: 'Poppins';
  font-weight: 800;
  font-size: 45px;
  color: ${(props) => props.theme.pureWhite};
  margin-top: 50px;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.pureWhite};
  padding: 10px;
  position: absolute;
  top: 92%;
  right: 10%;
`

export const Icon = styled(AIcon)``
