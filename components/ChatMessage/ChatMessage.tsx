import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface ChatMessage {
    id: string,
    content: string,
    createdAt: string,
    user: {
        id: string,
        name: string,
        // imageUri?: string,
    },
    // id: string; content: string; createdAt: string; user: { id: string; name: string; }
}


export default function ChatMessage( {chatMessage} : {chatMessage: ChatMessage}) {
    
    console.log(chatMessage);
    const isMe = chatMessage.user.id === 'u1';

    return (
        <View style={[styles.container, isMe ? styles.meContainer : styles.notMeContainer ]}>
            <Text style={[styles.text, isMe ? styles.meText : styles.notMeText ]}>{chatMessage.content}</Text>
        </View>
    );
}