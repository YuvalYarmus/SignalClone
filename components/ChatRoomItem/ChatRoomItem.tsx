import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'

interface Props {
    imageUri : string,
    unreadMessages : string,
    lastMessage : string,
    lastMessageTime: string,
    name: string, 
    userName: string,
    // children: React.ReactNode // if you want to use a closing tag
}

export default function ChatRoomItem({ imageUri, unreadMessages, lastMessage, lastMessageTime, name, userName } : Props) {
    return (
        <View style={styles.UserContainer}> 
          <Image style={styles.Image} source={ {uri: imageUri} }></Image>
          <View style={styles.BadgeContainer}>
            <Text style={styles.BadgeText}>{unreadMessages}</Text>
          </View>
          <View style={styles.UserInfoContainer}>
            <View style={styles.FirstRow}> 
              <Text style={styles.Name}>{name}</Text>
              <Text style={styles.NormalText}>{userName}</Text>
            </View>
            <View style={styles.LastMessageAndTime}>
              <Text numberOfLines={1} ellipsizeMode={'middle'} style={styles.Message}>{lastMessage}</Text>
              <Text style={styles.Time}>{lastMessageTime}</Text>
            </View>
          </View>
        </View>
      );
};
