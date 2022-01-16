import React from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/core';

interface ChatRoomItem {
    id : string,
    users: {
      id: string,  
      name: string,
      imageUri : string,
    }[],
    lastMessage: {
      id: string,
      content: string,
      createdAt: string,
    },
    newMessages?: number,
};

const arrangeNewMessages = (newMessages : number) => {
  if(newMessages > 9) {
      return '9+'
  }
  return newMessages.toString()
};

const arrangeTime = (time : string) => {
  let arrangedTime = new Date(time);
  console.log(arrangedTime.toLocaleString());
  let hours = arrangedTime.getHours();
  let minutes = arrangedTime.getMinutes();
  return `${hours}:${minutes}`;
};

export default function ChatRoomItem( {chatRoomItem} : {chatRoomItem: ChatRoomItem}) {
  const user = chatRoomItem.users[1];
  const message = chatRoomItem.lastMessage;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ChatRoom', { id: chatRoomItem.id });
  };

  return (
      <Pressable onPress={onPress} style={styles.UserContainer}> 
        <Image style={styles.Image} source={ {uri: user.imageUri} }></Image>

        {/* only if the are unread messages */}
        { chatRoomItem.newMessages && <View style={styles.BadgeContainer}>
          <Text style={styles.BadgeText}>{arrangeNewMessages(chatRoomItem.newMessages)}</Text>
        </View>}
        
        <View style={styles.UserInfoContainer}>
          <View style={styles.FirstRow}> 
            <Text style={styles.NameText}>{user.name}</Text>
            <Text style={styles.NormalText}>@{user.name}</Text>
          </View>
          <View style={styles.LastMessageAndTime}>
            <Text numberOfLines={1} ellipsizeMode={'middle'} style={styles.Message}>{message.content}</Text>
            <Text style={styles.Time}>{ arrangeTime(message.createdAt) }</Text>
          </View>
        </View>
      </Pressable>
    );
};
