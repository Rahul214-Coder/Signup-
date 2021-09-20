import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet, ColorPropType, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function SignupScreen({navigation}) {
  const [titleText, setTitleText] = useState("Create Account");

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  

  return (
    <View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 27, fontWeight: 'bold' }}>
          Create account  ✌,
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.light }}>
          Create your account to start your course lessons
        </Text>

      </View>

      <View style={styles.container}>
        
      </View>

      




      <View style={styles.container}>
      
        <TextInput style={styles.inputBox}
          mode="outlined"
          underlineColorAndroid='#428AF8'
          placeholder="Email"
          placeholderTextColor="#ffffff"
       
        />


        <TextInput style={styles.inputBox}
          mode="outlined"
          underlineColorAndroid='#428AF8'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />

       
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('signup')}><Text style={{textAlign:"center"}}>Dont have an account ?</Text></TouchableOpacity>


        <Text style={styles.signupTextCont}>By continuing you agree to our Terms &
          Conditons and Privacy Policy</Text>
        <View style={styles.signupTextCont}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00ffff' }}> I already have an account?</Text>
        </View>
      </View >
    </View >
  )
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  text: {
    flex: 1,
    color: "red",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,

  },

  inputBox: {
    width: 300,
    backgroundColor: 'yellow',
    borderRadius: 25,
    borderColor: '#a52a2a',
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'red',
    marginVertical: 10
  },





  text: {
   
    color: "grey",
    textAlign: 'center',
    fontSize: 30,
    marginTop: 50
  },
 
  button: {
    width: 300,
    backgroundColor: '#45d4f2',
    borderRadius: 25,
    borderColor: '#a52a2a',
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    textAlign: 'center',
    marginHorizontal: 55,
    flexDirection: 'row'
  }



});