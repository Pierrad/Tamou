import styled from 'styled-components/native'
import { Platform } from 'react-native'
import LottieView from 'lottie-react-native'

export const Container = styled.View`
  position: absolute;
  top: ${Platform.OS === 'ios' ? '10%' : '3%'};
  left: 33%;
  width: 300px;
  min-height: 50px;
  transform: translateX(-80px);
  background-color: ${props => props.theme.pureWhite};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 10;
  padding: 10px;
`

export const Lottie = styled(LottieView)`
  position: relative;
`

export const Text = styled.Text`
  position: relative;
  color: ${props => props.theme.error};
  font-family: "Poppins-Bold";
  font-size: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
