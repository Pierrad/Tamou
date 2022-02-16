import styled from 'styled-components/native'
import BurgerSvg from '../../assets/svg/burger.svg'
import NotificationSvg from '../../assets/svg/notification.svg'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
`

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const BurgerIcon = styled(BurgerSvg)`
  width: 24px;
  height: 24px;
`

export const Title = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.primaryTextColor};
  margin-left: 17px;
`

export const NotificationIcon = styled(NotificationSvg)``

export const NotificationNumber = styled.Text``


export const AvatarWrapper = styled.View`
  border-radius: 50%;
`

export const Avatar = styled.Image`
  width: 24px;
  height: 24px;
`