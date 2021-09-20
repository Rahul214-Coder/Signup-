import React, { useState } from 'react'

import { TextInput, View, Text, StyleSheet, ColorPropType, TouchableOpacity } from 'react-native'

import 'react-native-gesture-handler';

import SignupScreen from './screens/SignupScreen';
import Setpassword from './screens/Setpassword';







const App = () => {


    return (
        <>
       
                <View style={styles.container}>
                    <SignupScreen/>
                 <Text>hello</Text>
                </View>
                <View style={styles.container}>
                    <Setpassword/>
                </View>


         
        
            

        </> 

    );
    
};






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});

export default App;















