import styled from 'styled-components/native'
import FIcon from 'react-native-vector-icons/Feather'
import IIcon from 'react-native-vector-icons/Ionicons'

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.View`
  display: flex;
  flex-direction: row;
`

export const LeftIcon = styled(FIcon)`
  width: 24px;
  height: 24px;
  margin-top: 1px;
`

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.primaryTextColor};
  margin-left: 17px;
`

export const Notification = styled.View`
  display: flex;
  position: relative;
  margin-right: 15px;
  margin-top: 5px;
`

export const Icon = styled(IIcon)`
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
  font-family: "Poppins-Regular";
  line-height: 12px;
`


export const AvatarWrapper = styled.TouchableOpacity`
`

export const Avatar = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 50px;
`