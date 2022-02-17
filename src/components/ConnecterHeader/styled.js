import styled from 'styled-components/native'
import BurgerSvg from '../../assets/svg/burger.svg'
import BurgerWhiteSvg from '../../assets/svg/burgerWhite.svg'
import NotificationSvg from '../../assets/svg/notification.svg'
import NotificationWhiteSvg from '../../assets/svg/notificationWhite.svg'

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled.View`
  display: flex;
  flex-direction: row;
`

export const BurgerIcon = styled(BurgerSvg)`
  width: 24px;
  height: 24px;
  margin-top: 6px;
`

export const BurgerWhiteIcon = styled(BurgerWhiteSvg)`
  width: 24px;
  height: 24px;
  margin-top: 6px;
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

export const NotificationIcon = styled(NotificationSvg)`
  width: 24px;
  height: 24px;
  position: relative;
`

export const NotificationWhiteIcon = styled(NotificationWhiteSvg)`
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


export const AvatarWrapper = styled.View`
  border-radius: 50px;
`

export const Avatar = styled.Image`
  width: 24px;
  height: 24px;
`