import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: 'transparent',
        marginBottom: 60
    },
    hipperImage: {
        height: 550,
        width: 400,
        // zIndex: 1,
        // resizeMode: 'cover'
        // marginTop: 20
    },
    titleMovie: {
        fontFamily: 'BebasNeue_400Regular',
        fontSize: 50,
        alignSelf: 'center',
        position: 'absolute',
        top: 350,
        color: '#fff',
        zIndex: 2
    },
    footHipper: {
        // marginTop: -20,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 11
    },
    myList: {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
       
    },
    textMyList: {
        color: '#D3D3D3',
        fontFamily: 'Nunito_400Regular',
        fontSize: 10
    },
    buttonHipper: {
        backgroundColor: '#fff',
        width: 140,
        height: 40,
        borderRadius: 5
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        marginLeft: 20,
        marginRight: 20
    },
    textHipper: {
        fontFamily: 'Nunito_700Bold'
    },
    gradient: {
        width: '100%',
        height: '60%',
        position: 'absolute',
        zIndex: 9,
        bottom: 0
    }
})

export default styles