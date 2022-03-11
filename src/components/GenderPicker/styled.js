import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
`

export const TitleWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 30px;
  color: ${(props) => props.theme.pureWhite};
  margin: 30px 20px;
`

export const Pickers = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin-bottom: 50px;
`

export const Picker = styled.TouchableOpacity`
  border: 1px solid ${(props) => props.theme.veryLightGrey};
  background-color: ${(props) => props.isSelected ? props.theme.veryLightGrey : 'transparent'};
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Image = styled.Image`
  width: 200px;
  height: 200px;
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