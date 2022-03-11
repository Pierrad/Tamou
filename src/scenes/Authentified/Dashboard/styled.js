import styled from 'styled-components/native'
import ConnectedHeader from '../../../components/ConnecterHeader'
import DomainCard from '../../../components/DomainCard'

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
`

export const Header = styled(ConnectedHeader)`
  position: static;
  top: 15px;
  margin: 15px;
  height: auto;
`

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 24px;
  margin: 20px 15px 10px 15px;
  color: ${props => props.theme.backgroundInverted};
`

export const CardList = styled.View`
  flex: 1;
  margin: 20px 15px 60px 15px;
`

export const DCard = styled(DomainCard)``