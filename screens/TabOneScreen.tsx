import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../dummy-data/ChatRooms'
const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
   
    <View style={styles.Page}>

      <FlatList 
      data = {chatRoomsData}
      renderItem = {({item, index}) => <ChatRoomItem chatRoom={item}/>}
      showsVerticalScrollIndicator={true}
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
