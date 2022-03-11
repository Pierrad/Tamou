import styled from 'styled-components/native'

export const Container = styled.SafeAreaView``

export const Button = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${props => props.isSelected
		? (props.backgroundSelectedColor || props.theme.pureWhite)
		: (props.backgroundColor || props.theme.pureWhite)};
  border-radius: 70px;
  width: 200px;
`

export const Text = styled.Text`
  font-family: "Poppins-Bold";
  color: ${props => props.isSelected ? props.theme.pureWhite : (props.textColor || props.theme.pureBlack)};
  font-size: 18px;
`
