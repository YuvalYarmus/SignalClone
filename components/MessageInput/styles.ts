import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'darkblue',
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginRight: 10,        
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal: 5,
        marginTop: 3,
    },
    btnContainer: {
        minWidth: 5,
        minHeight: 30,
        width: '10%',
        height: '25%',
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
});

export default styles;