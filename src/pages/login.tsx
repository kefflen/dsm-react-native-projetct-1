import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {navigationProps} from '../types'

type Inputs = {
  email: string
  password: string
}

type LoginParamList = {}
export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation<navigationProps>()

  const handleLogin = () => {
    if (email === '' && password === '') {
      navigation.navigate('main')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Password</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('login')
          }}>
          <View>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 300,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#0c4a6e',
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: '#7dd3fc',
    backgroundColor: '#e0f2fe',
  },
  buttonContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#7dd3fc',
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
  },
})
