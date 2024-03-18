import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background-color: '#fff';
`

export const Form = styled.View`
  display: flex;
  flex-direction: row;
`

export const Input = styled.TextInput`
  flex: 1;
  border: ${props => props.theme.primary400} 1px solid;
  border-radius: 5px;
  padding: 8px 16px;
  `

export const SubmitButton = styled(RectButton)`
  background-color: ${props => props.theme.primary400};
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  padding: 0 12px;
  color: white;
  border-radius: 20px;
`
