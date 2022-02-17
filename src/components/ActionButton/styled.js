import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Button = styled.TouchableHighlight`
  background-color: ${props => props.primary && !props.isOutlined ? props.theme.primaryButtonColor : props.theme.secondaryButtonColor} ;
  border: ${props => props.isOutlined? `1px solid ${props.theme.primaryButtonColor}` : '1px solid #fff'};
  border-radius: 72px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-right:30px;
  margin-left:30px;
`

export const Text = styled.Text`
color: ${props => props.primary && !props.isOutlined ? '#fff' : '#838383'};


`
