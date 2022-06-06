import styled from 'styled-components/native'

import BasicHeader from '../../../components/BasicHeader'
import NotificationCard from '../../../components/NotificationCard'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
`

export const Wrapper = styled.ScrollView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled(BasicHeader)`
  top: 15px;
  margin: 15px 15px 30px 15px;
  height: auto;
`

export const Notification = styled(NotificationCard)``

export const EmptyNotification = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 18px;
  margin-top: 50px;
  width: 100%;
  text-align: center;
`