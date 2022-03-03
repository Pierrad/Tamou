import styled from 'styled-components/native'
import ConnectedHeader from '../../../components/ConnecterHeader'

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
  font-family: "Poppins";
  font-size: 24px;
  font-weight: bold;
  margin: 10px 15px 10px 15px;
`
