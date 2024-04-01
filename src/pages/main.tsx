import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {Component} from 'react'
import {ActivityIndicator, Keyboard, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {githubApi} from '../services/githubApi'
import {theme} from '../theme'
import {
  Avatar,
  Bio,
  Container,
  DeleteButton,
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

type State = {
  newUser: string
  users: User[]
  loading: boolean
}

class Main extends Component {
  state: State = {
    newUser: '',
    users: [],
    loading: false,
  }

  async componentDidMount() {
    const usersData = await AsyncStorage.getItem('users')
    if (usersData) {
      this.setState({...this.state, users: JSON.parse(usersData)})
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.state.users) {
      AsyncStorage.setItem('users', JSON.stringify(this.state.users))
    }
  }

  render() {
    const {users, newUser, loading} = this.state

    const handleAddUser = async () => {
      let githubUser: any = null
      const userAlreadyExists = users.find(
        user => user.login.toLowerCase() === newUser.toLowerCase(),
      )
      if (userAlreadyExists) {
        return this.setState({...this.state, loading: false})
      }

      this.setState({...this.state, loading: true})

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
      } finally {
        this.setState({...this.state, loading: false})
      }
    }

    const hadleDeleteUser = async (login: string) => {
      const newUsersData = users.filter(user => user.login !== login)
      this.setState({...this.state, users: newUsersData})
    }

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
            onSubmitEditing={handleAddUser}
          />

          <SubmitButton style={styles.SubmitButton} onPress={handleAddUser}>
            {loading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <Icon name="add" size={20} color={theme.textOnPrimary} />
            )}
          </SubmitButton>
        </Form>
        <List
          data={this.state.users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <View>
                <Avatar
                  source={{uri: item.avatar}}
                  style={styles.AvatarImage}
                />
              </View>
              <View>
                <Name>{item.name}</Name>
                <Bio>{item.bio}</Bio>
                <ProfileButton styles={styles.ProfileButton}>
                  <ProfileButtonText>Ver perfil</ProfileButtonText>
                </ProfileButton>
                <DeleteButton
                  styles={styles.ProfileButton}
                  onPress={() => hadleDeleteUser(item.login)}>
                  <ProfileButtonText>Excluir</ProfileButtonText>
                </DeleteButton>
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
  AvatarImage: {
    borderRadius: 32,
  },
})

export default Main
