import React, { useState } from "react";
import { Text, TextInput, View, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./styles";
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';


export default function ChatMessage( ) {
    const [message, setMessage] = useState('');
    
    const send = () => {
        console.warn(`message: ${message}`);
        setMessage('');
    };
    const plus = () => {
        console.warn('plus clicked');
    };
    const onPress = () => {
        if (message) send();
        else if(!message) plus();
    };

    return (
        <KeyboardAvoidingView style={styles.root} behavior={Platform.OS == "ios" ? "padding" : "height"} >
            <View style={styles.inputContainer}>
                <SimpleLineIcons style={styles.icon} name="emotsmile" size={24} color="black" />
                <TextInput value={message} onChangeText={(msg) => setMessage(msg)}
                placeholder="Enter a message..." style={styles.input}></TextInput>
                <Feather name="camera" size={24} color="black" style={styles.icon}></Feather>
                <MaterialCommunityIcons style={styles.icon} name="microphone-outline" size={24} color="black" />
            </View>
            <Pressable onPress={onPress} style={styles.btnContainer}>
                {/* <Ionicons name="send-outline" size={24} color="black" /> */}
                
                {message ? <Ionicons name="send-outline" size={18} color="black" />
                : <AntDesign name="plus" size={18} color="black" />}
            
            </Pressable>
        </KeyboardAvoidingView>
    );
}