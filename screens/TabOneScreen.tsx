import React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatRoomItem from '../components/ChatRoomItem';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
   
    <View>
      <ChatRoomItem 
        imageUri="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"
        unreadMessages="1"
        lastMessage="Hola Hola Coca Cola Your jhin is now a soda"
        lastMessageTime="1:00 PM"
        name="Elon Musk"
        userName="@elonmusk"
      >
      </ChatRoomItem>

    </View>

    // imageUri= {"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"}>
    // Name={"Elon Musk"}
    // userName={"@elonmusk"}
    // lastMessage={"Hola Hola Coca Cola Your jhin is now a soda"}
    // lastMessageTime={"2:00 PM"}
    // unreadMessages={"4"}

    // <View style={styles.UserContainer}> 
    //   <Image style={styles.image} source={ {uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"}}></Image>
    //   <View style={styles.BadgeContainer}>
    //     <Text style={styles.BadgeText}>4</Text>
    //   </View>
    //   <View style={styles.UserInfoContainer}>
    //     <View style={styles.FirstRow}> 
    //       <Text style={styles.Name}>Elon Musk</Text>
    //       <Text style={styles.NormalText}>@elonmusk</Text>
    //     </View>
    //     <View style={styles.LastMessageAndTime}>
    //       <Text numberOfLines={1} ellipsizeMode={'middle'} style={styles.Message}>Hola Hola Coca Cola Your jhin is now a soda</Text>
    //       <Text style={styles.Time}>11:11 AM</Text>
    //     </View>
    //   </View>
    // </View>
  );
}







// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30, // the space created by the separator from other items
//     height: 1, // the width of the line itself
//     width: '80%', // the width of the page i.e how long the line is
//   },
// });
