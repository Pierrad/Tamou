import styled from 'styled-components/native'

import BasicHeader from '../../../components/BasicHeader'
import GenderPicker from '../../../components/GenderPicker'
import ToggleButtonList from '../../../components/ToggleButtonList'
import ValidateSurvey from '../../../components/ValidateSurvey'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.game};
`

export const GenderPickerContainer = styled(GenderPicker)``

export const ToggleButtonListContainer = styled(ToggleButtonList)``

export const ValidateSurveyContainer = styled(ValidateSurvey)``

export const Header = styled(BasicHeader)`
  margin: 5px 15px 0px 15px;
  height: auto;
  `