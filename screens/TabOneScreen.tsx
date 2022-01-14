import React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatRoomItem from '../components/ChatRoomItem';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
   
    <View style={styles.Page}>
      <ChatRoomItem 
        imageUri="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"
        unreadMessages="1"
        lastMessage="Hola Hola Coca Cola Your jhin is now a soda"
        lastMessageTime="3:00 PM"
        name="Elon Musk"
        userName="@elonmusk"
      />
      <ChatRoomItem 
        imageUri="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"
        unreadMessages="4"
        lastMessage="Who is the real one? "
        lastMessageTime="3:00 PM"
        name="Elon Musk copycat"
        userName="@elonmuskClone"
      />
      

    </View>

  );
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    flexDirection: 'column',
  },
});
