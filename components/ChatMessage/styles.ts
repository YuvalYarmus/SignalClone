import { StyleSheet } from 'react-native'

const blue = '#3872E9';
const gray =  '#DCDCDC';
const white = '#FFFAF0'; // floral white;
const black = 'black';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    meContainer: {
        backgroundColor: gray,
        marginLeft: 'auto',
        marginRight: 20,
    },
    notMeContainer: {
        backgroundColor: blue,
        marginLeft: 20,
        marginRight: 'auto',
    },
    text: {
        fontSize: 16,
    },
    meText: {
        color: black,
    },
    notMeText: {
        color: white,
    },
});

export default styles;