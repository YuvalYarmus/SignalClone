import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'

interface ChatRoom {
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

export default function ChatRoomItem( {chatRoom} : {chatRoom: ChatRoom}) {
  const user = chatRoom.users[1];
  const message = chatRoom.lastMessage;
    return (
        <View style={styles.UserContainer}> 
          <Image style={styles.Image} source={ {uri: user.imageUri} }></Image>

          {/* only if the are unread messages */}
          { chatRoom.newMessages && <View style={styles.BadgeContainer}>
            <Text style={styles.BadgeText}>{arrangeNewMessages(chatRoom.newMessages)}</Text>
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
        </View>
      );
};
