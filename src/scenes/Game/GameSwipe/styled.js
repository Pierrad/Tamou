import styled from 'styled-components/native'
import AIcon from 'react-native-vector-icons/AntDesign'
import IIcon from 'react-native-vector-icons/Ionicons'

import BasicHeader from '../../../components/BasicHeader'
import SwipeCard from '../../../components/SwipeGameCard'
import ToggleRectButton from '../../../components/ToggleRectButton'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  height: 100%;
`

export const Header = styled(BasicHeader)`
  margin: 5px 15px 0px 15px;
  height: auto;
`

export const Toggles = styled.ScrollView`
  margin: 30px 15px 0px 15px;
`

export const ToggleButton = styled(ToggleRectButton)`
  margin-right: 10px;
`

export const Card = styled(SwipeCard)``

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
  background-color: ${(props) => props.theme.game};
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

export const Icon2 = styled(IIcon)``
