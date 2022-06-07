import styled from 'styled-components/native'

import GenderPicker from '../../../components/GenderPicker'
import TagLineInput from '../../../components/TagLineInput'
import CategoriesPicker from '../../../components/CategoriesPicker'
import ValidateSurvey from '../../../components/ValidateSurvey'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.orange};
`

export const GenderPickerContainer = styled(GenderPicker)``

export const TagLineContainer = styled(TagLineInput)``

export const CategoriesPickerContainer = styled(CategoriesPicker)``

export const ValidateSurveyContainer = styled(ValidateSurvey)``
