import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        
        // paddingHorizontal: 10
    },
    headerContainer: {
        zIndex: 3, 
        paddingHorizontal: 10
    },
    gradient: {
        top: 0,
        position: 'absolute',
        width: '100%',
        height: '20%',
        zIndex: 2
    },
    content: {
        position: 'relative',
        justifyContent: 'center',
        alignItems:  'center',
        // marginTop: '100%',
        top: '54%',
        zIndex: 5
        // maxWidth: 120
    },
    TextLanding1: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 38,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 10
        // justifyContent: 'center'
    },
    TextLanding2: {
        color: '#7f7f7f',
        fontSize: 14,
        fontFamily: 'Nunito_600SemiBold'
    },
    button: {
        width: '96%',
        height: 50,
        borderRadius: 3,
        backgroundColor: '#D61111',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Nunito_400Regular'
    },
    gradientFeet: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: '60%',
        zIndex: 2
    }

})


export default styles