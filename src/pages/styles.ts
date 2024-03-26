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

  :disabled {
    opacity: 0.5;
  }
`

export const List = styled.FlatList`
  margin-top: 8px;
`

export const User = styled.View`
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  border-radius: 5px;
  margin-top: 16px;
  border: ${props => props.theme.primary400} 1px solid;
`

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  border: ${props => props.theme.primary400} 2px solid;
`

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`

export const Bio = styled.Text.attrs({
  numberOfLines: 3,
})`
  opacity: 0.9;
`

export const ProfileButton = styled(RectButton)`
  background-color: ${props => props.theme.primary400};
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  padding: 4px 8px;
  color: white;
`

export const DeleteButton = styled(RectButton)`
  background-color: #f43f5e;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  padding: 4px 8px;
  color: white;
`

export const ProfileButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: capitalize;
`
