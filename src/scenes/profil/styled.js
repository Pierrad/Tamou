import styled from 'styled-components/native'

import BasicHeader from '../../components/BasicHeader'
import ProfilHeader from '../../components/ProfilHeader'
import ProfilDetail from '../../components/ProfilDetail'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex:1;
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled(BasicHeader)`
  top: 15px;
  margin: 15px;
  height: auto;
`

export const ProfilTop = styled(ProfilHeader)`
`

export const Divider = styled.View`
  height: 8px;
  background-color: ${props => props.theme.orange};
  opacity: 0.05;
  margin-bottom: 15px;
`

export const ProfilD = styled(ProfilDetail)`
  margin: 0px 24px;
`