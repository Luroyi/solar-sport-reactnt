import auth from '@react-native-firebase/auth';
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

const LoginScreen: React.FC =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");

    const handleLogen = async () => {
        try{
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert("Success", "inicio de sesion exitoso");
            
        } catch (error: any){
            const {message} = error;

            Alert.alert("Error", message ? message : 'This is an error' );
        }
    };

    return(
        <View>
        <Text>Login</Text>
        <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize='none'
        />

        <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        <Button title='Login' onPress={handleLogen} />
        </View>

    );
};

export default LoginScreen


