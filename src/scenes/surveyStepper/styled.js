import styled from 'styled-components/native'

import GenderPicker from '../../components/GenderPicker'
import AgePicker from '../../components/AgePicker'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.orange};
`

export const GenderPickerContainer = styled(GenderPicker)``

export const AgePickerContainer = styled(AgePicker)``