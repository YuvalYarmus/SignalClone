import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'

// interface ChatRoom {
//     imageUri : string,
//     unreadMessages : string,
//     lastMessage : string,
//     lastMessageTime: string,
//     name: string, 
//     userName?: string,
//     // children: React.ReactNode // if you want to use a closing tag
// }

const cutNewMessages = (newMessages : number) => {
    if(newMessages > 9) {
        return '9+'
    }
    return newMessages.toString()
}

export default function ChatRoomItem({ chatRoom } ) {
  const user = chatRoom.users[1];
  const message = chatRoom.lastMessage;
    return (
        <View style={styles.UserContainer}> 
          <Image style={styles.Image} source={ {uri: user.imageUri} }></Image>

          {/* only if the are unread messages */}
          { chatRoom.newMessages ? <View style={styles.BadgeContainer}>
            <Text style={styles.BadgeText}>{cutNewMessages(chatRoom.newMessages)}</Text>
          </View> : null}
          
          <View style={styles.UserInfoContainer}>
            <View style={styles.FirstRow}> 
              <Text style={styles.NameText}>{user.name}</Text>
              <Text style={styles.NormalText}>@{user.name}</Text>
            </View>
            <View style={styles.LastMessageAndTime}>
              <Text numberOfLines={1} ellipsizeMode={'middle'} style={styles.Message}>{message.content}</Text>
              <Text style={styles.Time}>{message.createdAt}</Text>
            </View>
          </View>
        </View>
      );
};
