import React from "react";
import { Text, View as SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import Input from '../components/MessageInput';
import Chat from "../dummy-data/Chats";
const messages = Chat.messages;

export default function ChatRoomScreen() {
    return (
        <SafeAreaView style={styles.page}>

        <FlatList style={styles.chatList}
            data = {messages}
            renderItem = {({item, index}) => <ChatMessage chatMessage={item}/>}
            showsVerticalScrollIndicator={true}
            // backgroundColor={'darkblue'}
            
        />
        <Input />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    chatList: {
        backgroundColor: 'darkblue',
    },
});