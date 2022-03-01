import styled from 'styled-components/native'
import MIcon from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.pureWhite};
`

export const Touchable = styled.TouchableOpacity`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const Icon = styled(MIcon)``

export const Text = styled.Text`
  font-family: 'Poppins';
  font-size: 15px;
`
