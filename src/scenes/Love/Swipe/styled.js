import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'

import BasicHeader from '../../../components/BasicHeader'
import SwipeCard from '../../../components/SwipeCard'

export const Container = styled.SafeAreaView`
background-color: ${props => props.theme.background};
`

export const Header = styled(BasicHeader)`
  margin: 5px 15px 0px 15px;
  height: auto;
`

export const Card = styled(SwipeCard)`
  margin-top: 20px;
`

export const Buttons = styled.View`
  margin: 30px 80px;
  justify-content: space-between;
  flex-direction: row;
`

export const LikeButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.orange};
  padding: 20px;
`

export const DislikeButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  background-color: ${(props) => props.theme.refuse};
  padding: 20px;
`

export const Icon = styled(AIcon)``
