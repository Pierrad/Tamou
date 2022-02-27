import styled from 'styled-components/native'

import Input from '../../components/Input'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
`

export const Title = styled.Text`
  font-family: 'Poppins';
  font-size: 24px;
  color: ${props => props.theme.orange};
  margin-bottom: 15px;
`

export const Fields = styled.View`
  margin-bottom: 100px;
`

export const Field = styled(Input)`
  margin-bottom: 15px;
`