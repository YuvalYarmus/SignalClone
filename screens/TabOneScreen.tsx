import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../dummy-data/ChatRooms'
const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
   
    <View style={styles.Page}>
      <ChatRoomItem chatRoom={chatRoom1} />
      <ChatRoomItem chatRoom={chatRoom2} />
      

    </View>

  );
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    flexDirection: 'column',
  },
});
