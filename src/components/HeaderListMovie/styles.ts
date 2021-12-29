import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        // width: '100%',
        top:0,
        zIndex: 999,
        // backgroundColor: 'transparent',
        
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 200,
        // shadowColor: '#000',
        // elevation: 100,
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: 90,
        marginTop: 10
        
    },
    iconLogo: {
        width: 50,
        height: 40
    },
    textHeader: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'Nunito_700Bold'
    },
})

export default styles