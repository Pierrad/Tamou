import styled from 'styled-components/native'
import BurgerIcon from 'react-native-vector-icons/Feather'
import NotificationIcon from 'react-native-vector-icons/Ionicons'

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled.View`
  display: flex;
  flex-direction: row;
`

export const Burger = styled(BurgerIcon)`
  width: 24px;
  height: 24px;
  margin-top: 1px;
`


export const Title = styled.Text`
  font-family: "Poppins";
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  color: ${props => props.theme.primaryTextColor};
  margin-left: 17px;
`

export const Notification = styled.View`
  display: flex;
  position: relative;
  margin-right: 15px;
`

export const NotificationI = styled(NotificationIcon)`
  width: 24px;
  height: 24px;
  position: relative;
`

export const NotificationNumberWrap = styled.View`
  position: absolute;
  background-color: ${props => props.theme.primaryTextColor};
  border-radius: 50px;
  padding: 3px 5px;
  top: -5px;
  right: -5px;
`

export const NotificationNumber = styled.Text`
  font-size: 10px;
  font-family: "Poppins";
`


export const AvatarWrapper = styled.TouchableOpacity`
  border-radius: 50px;
`

export const Avatar = styled.Image`
  width: 24px;
  height: 24px;
`