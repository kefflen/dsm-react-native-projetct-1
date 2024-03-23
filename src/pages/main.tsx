import React, {Component} from 'react'
import {Keyboard, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {githubApi} from '../services/githubApi'
import {theme} from '../theme'
import {
  Avatar,
  Bio,
  Container,
  Form,
  Input,
  List,
  Name,
  ProfileButton,
  ProfileButtonText,
  SubmitButton,
  User,
} from './styles'

type User = {
  name: string
  login: string
  bio: string
  avatar: string
}
class Main extends Component {
  state: {
    newUser: string
    users: User[]
  } = {
    newUser: '',
    users: [],
  }

  handleAddUser = async () => {
    const {users, newUser} = this.state
    let githubUser: any = null
    try {
      const {data} = await githubApi.get(`/users/${newUser}`)
      githubUser = {
        name: data.name,
        login: data.login,
        bio: data.bio,
        avatar: data.avatar_url,
      }

      this.setState({
        users: [...users, githubUser],
        newUser: '',
      })

      Keyboard.dismiss()
    } catch (error) {
      console.log('Error fetching github data: ', error)
    }
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
            onChange={text =>
              this.setState({...this.state, newUser: text.nativeEvent.text})
            }
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />

          <SubmitButton
            style={styles.SubmitButton}
            onPress={this.handleAddUser}>
            <Icon name="add" size={20} color={theme.textOnPrimary} />
          </SubmitButton>
        </Form>
        <List
          data={this.state.users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <View>
                <Avatar source={{uri: item.avatar}} />
              </View>
              <View>
                <Name>{item.name}</Name>
                <Bio>{item.bio}</Bio>
                <ProfileButton styles={styles.ProfileButton}>
                  <ProfileButtonText>Ver perfil</ProfileButtonText>
                </ProfileButton>
              </View>
            </User>
          )}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  SubmitButton: {
    borderRadius: 5,
  },
  ProfileButton: {
    borderRadius: 20,
  },
})

export default Main
