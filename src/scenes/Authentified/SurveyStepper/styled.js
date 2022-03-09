import styled from 'styled-components/native'

import GenderPicker from '../../../components/GenderPicker'
import AgePicker from '../../../components/AgePicker'
import CategoriesPicker from '../../../components/CategoriesPicker'
import ValidateSurvey from '../../../components/ValidateSurvey'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.orange};
`

export const GenderPickerContainer = styled(GenderPicker)``

export const AgePickerContainer = styled(AgePicker)``

export const CategoriesPickerContainer = styled(CategoriesPicker)``

export const ValidateSurveyContainer = styled(ValidateSurvey)``