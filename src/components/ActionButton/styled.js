import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;

`

export const Button = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${props => props.primary && !props.isOutlined ? props.theme.primaryButtonColor : props.theme.secondaryButtonColor} ;
  border: ${props => props.isOutlined? `1px solid ${props.theme.primaryButtonColor}` : '1px solid #fff'};
  border-radius: 70px;
`

export const Text = styled.Text`
  font-family: "Poppins";
  font-weight: bold;
  color: ${props => props.primary && !props.isOutlined ? '#fff' : '#838383'};
  font-size: 18px;
`
