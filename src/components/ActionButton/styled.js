import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Button = styled.TouchableHighlight`
  background-color: ${props => props.primary && !props.isOutlined ? '#F99030' : '#fff'} ;
  border: ${props => props.isOutlined? '1px solid #F99030' : '1px solid #fff'};
  border-radius: 72px;
  padding: 20px;
  display: flex;
  align-items: center;
 
  
  
`

export const Text = styled.Text`
color: ${props => props.primary && !props.isOutlined ? '#fff' : '#838383'};

`
