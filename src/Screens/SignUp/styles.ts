import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    inner: {
        flex: 1,
        // padding: ,
        justifyContent: 'center',
        alignItems: 'center'

    },
    session: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textInput: {
        color: '#fff',
        backgroundColor: '#333',
        width: 350,
        height: 75,
        borderRadius: 4,
        fontSize: 18,
        padding: 10,
        margin: 10,
        fontFamily: 'Nunito_600SemiBold'
    },
    button: {
        backgroundColor: '#A6A297',
        width: 350,
        height: 60,
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 9
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    },
    textFeet: {
        fontSize: 15,
        color: '#A6A297',
        margin: 10,
        fontFamily: 'Nunito_700Bold'
    }
})

export default styles