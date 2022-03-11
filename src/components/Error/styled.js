import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.SafeAreaView`
  position: absolute;
  top: ${Platform.OS === 'ios' ? '10%' : '3%'};
  left: 45%;
  width: 50%;
  transform: translateX(-80px);
  background-color: ${props => props.theme.pureWhite};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  z-index: 10;
`

export const Text = styled.Text`
  color: ${props => props.theme.error};
  font-family: "Poppins";
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
