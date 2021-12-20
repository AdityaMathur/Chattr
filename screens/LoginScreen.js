import { StatusBar } from "expo-status-bar";
import React , { useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ( {navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    
    useEffect(() =>{
       const unsubscribe= auth.onAuthStateChanged((authUser) => {
           console.log(authUser);
            if(authUser){
                navigation.replace("Home");
            }
        });
        return unsubscribe;
        
    }, [])

    const signIn =() => {
        auth.signInWithEmailAndPassword(email,password)
        .catch(error =>alert(error));


    }
    return (
        <KeyboardAvoidingView  behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image source = {{ 
                uri:
                "data:image/png;base64,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"
            }}
            style={{ width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
                autoFocus type="email" 
                value={email} 
                onChangeText={(text) => setEmail(text)}
                />
                <Input 
                placeholder="Password"  
                secureTextEntry type="password"
                value={password} 
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register"/>
            <View style={{ height: 100}}/>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen

const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent : "center",
        padding: 10,
        backgroundColor: "white",
       
    },
    inputContainer: {
        width:300,
      
    },
    button: {
        width:200,
        marginTop:10 ,
       
    },
})