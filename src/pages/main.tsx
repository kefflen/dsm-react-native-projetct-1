import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {githubApi} from '../services/githubApi'
import {theme} from '../theme'
import {Container, Form, Input, SubmitButton} from './styles'

class Main extends Component {
  state = {
    newUser: '',
    users: [],
  }

  handleAddUser = async () => {
    const {users, newUser} = this.state
    let githubUser: any = null
    console.log(newUser)
    try {
      const { data } = await githubApi.get(`/users/kefflen`)
      githubUser = {
        name: data.name,
        login: data.login,
        bio: data.bio,
        avatar: data.avatar_url,
      }
    } catch (error) {
      githubUser = error
    }
    
    this.setState({
      users: [...users, githubUser],
      newUser: '',
    })
  }

  render() {
    return (
      <Container>
        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicione usuario..."
            value={this.state.newUser}
            onChange={text => this.setState({...this.state, newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />

          <SubmitButton
            style={styles.SubmitButton}
            onPress={this.handleAddUser}>
            <Icon name="add" size={20} color={theme.textOnPrimary} />
          </SubmitButton>
        </Form>
        <View>
          <Text>{JSON.stringify(this.state.users[0])}</Text>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  SubmitButton: {
    borderRadius: 5,
  },
})

export default Main
