import styled from 'styled-components/native'

import BasicHeader from '../../../components/BasicHeader'
import ToggleRectButtonList from '../../../components/ToggleRectButtonList'
import FIcon from 'react-native-vector-icons/Feather'


export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
  position: relative;
  width: 100%;
`

export const Header = styled(BasicHeader)`
  position: static;
  top: 15px;
  margin: 15px;
  height: auto;
`

export const Questions = styled.ScrollView`
  margin: 15px;
` 

export const Question = styled(ToggleRectButtonList)`
`

export const SaveBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8%;
  right: 8%;
  padding: 15px;
  background-color: ${props => props.color};
  border-radius: 50px;
`
export const SaveIcon = styled(FIcon)``
