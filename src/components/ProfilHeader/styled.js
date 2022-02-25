import styled from 'styled-components/native'
import EIcon from 'react-native-vector-icons/EvilIcons'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AvatarWrapper = styled.View`
  position: relative;
`

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  margin-bottom: 30px;
`

export const Name = styled.Text`
  font-family: 'Poppins';
  font-size: 20px;
  color: ${props => props.theme.backgroundInverted};
`

export const Location = styled.Text`
  font-family: 'Poppins';
  font-size: 16px;
  color: ${props => props.theme.backgroundInverted};
`

export const IconWrapper = styled.View`
  position: absolute;
  right: 5px;
  top: 110px;
  background: rgba(88, 124, 244, 0.5);
  border-radius: 20px;
  padding: 5px;
`

export const EditIcon = styled(EIcon)``