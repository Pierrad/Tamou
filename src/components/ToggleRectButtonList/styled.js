import styled from 'styled-components/native'

import ToggleButtonC from '../ToggleRectButton'

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  position: relative;
`

export const Label = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: ${(props) => props.theme.pureBlack};
  margin: 10px 0;
`

export const Buttons = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const ToggleButton = styled(ToggleButtonC)`
  flex: 45%;
  margin: 5px;
`
