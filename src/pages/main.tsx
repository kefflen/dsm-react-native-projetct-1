import React from 'react'
import {StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {theme} from '../theme'
import {Container, Form, Input, SubmitButton} from './styles'

export default function Main() {
  return (
    <Container>
      <Form>
        <Input placeholder="Input..." />
        <SubmitButton
          style={styles.SubmitButton}
          onPress={() => {
            console.log('pressed')
          }}>
          <Icon name="add" size={20} color={theme.textOnPrimary} />
        </SubmitButton>
      </Form>
    </Container>
  )
}

const styles = StyleSheet.create({
  SubmitButton: {
    borderRadius: 5,
  },
})
