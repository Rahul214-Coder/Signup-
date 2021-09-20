import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet, ColorPropType, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';






export default function Setpassword({navigation}) {
  const [titleText, setTitleText] = useState("Set new password");


  const [password, setPassword] = useState('')
  

  return (
    <View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 27, fontWeight: 'bold' }}>
          Set new password 🔐,
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.light }}>
          Enter your email and a verification code ti reset the password will be sent to your email.
        </Text>

      </View>

      <View style={styles.container}>
        
      </View>

      




      <View style={styles.container}>
       
      

        <TextInput style={styles.inputBox}
          mode="outlined"
          underlineColorAndroid='#428AF8'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        
        />

       
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Set new password</Text>
        </TouchableOpacity>
       
      
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