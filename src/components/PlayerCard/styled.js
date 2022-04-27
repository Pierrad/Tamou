import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
  margin-bottom: 15px;
`

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.backgroundInverted};
  border-radius: 10px;
  padding: 10px;
`

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`

export const Pseudo = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 18px;
  color: ${props => props.theme.pureBlack};
`

export const Level = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 18px;
  color: ${props => props.theme.game};
`