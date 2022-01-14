import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    UserContainer: {
      flexDirection: 'row',
      padding: 10,
      marginRight: 10,
      // marginLeft: 10,
      marginBottom: 10,
      // marginTop: 10,
    },
    Image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10
    },
    BadgeContainer: {
      // backgroundColor: '#3872E9', // original signal color
      backgroundColor: '#3855E9',
      borderColor: '#FFFAF0',
      borderWidth: 1,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      position: 'absolute',
      left: 55,
      top: 5,
    },
    BadgeText: {
      // color: '#fffdd0', // cream white
      // color: '#F8F8FF', // ghost white
      color: '#FFFAF0', // floral white
      fontSize: 12,
      marginRight: 0.7,
    },
    UserInfoContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    FirstRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 1.5,
    },
    LastMessageAndTime: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      // backgroundColor: 'red',
      // lineHeight: 0.1,
      height: 25,
    },
    NormalText: {
      fontSize: 16,
      color: 'white',
    },
    Name: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
    },
    Message: {
      fontSize: 16,
      flexShrink: 1,
      color: 'white',
      // overflow: 'hidden',
      // whiteSpace: 'nowrap',
      // textOverflow: 'ellipsis',
    },
    Time: {
      fontSize: 16,
      marginLeft: 5,
      color: 'white',
    },
});

export default styles;