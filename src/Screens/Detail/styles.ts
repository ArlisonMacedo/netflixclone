// import {  } from "expo-status-bar"
import { StatusBar, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // padding: StatusBar.currentHeight
        // paddingVertical: 10,
        
    },
    content: {
        // backgroundColor: 'red',
        flex: 1
    },
    
    title: {
        color: '#fff',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 30,
        maxWidth: '100%',
        paddingHorizontal: 10
    },
    movieIdentify: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    year: {
        color: '#7F7F7F'
    },
    rated: {
        color :'#fff',
        backgroundColor: 'red',
        borderRadius: 3
    },
    buttonPlayMovie: {
        backgroundColor: '#fff',
        // width: '100%',
        marginHorizontal: 10,
        marginTop: 13,
        borderRadius: 5,
        height: 40
    },
    contentButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    buttonText: {
        fontFamily: 'Nunito_600SemiBold',
        
    },
    buttonDownMovie: {
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
        height: 40,
        backgroundColor: '#303030'
    },
    contentButtonDown: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    buttonTextDown: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#fff'
    },
    plot: {
        margin: 10
    },
    textPlot: {
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
    },
    cast: {
        margin: 10,
        marginTop: -4
        // backgroundColor: '#fff'
    },
    textCast: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 11,
        color: '#7a7a7a'
    },
    option: {
        marginBottom: 20,
        justifyContent: 'flex-start'
    },
    optionContent: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 30
    },
    optionFormat: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    optionText: {
        color: '#7a7a7a',
        fontFamily: 'Nunito_400Regular',
        fontSize: 11,
    },
    moreMovie: {
        // flex: 1,
        // height: '100%',
        marginBottom: 280,
        borderTopWidth: 1,
        borderTopColor: "#7a7a7a"
        // justifyContent: '',
        // alignItems: 'center'
    },
    lineFocus: {
        borderWidth: 3,
        borderTopColor: 'red',
        maxWidth: 200,
        marginTop: 2,
        marginLeft: 10
    },
    recomments: {
        fontFamily: 'Nunito_700Bold',
        color: '#fff',
        fontSize: 16,
        // borderTopWidth: 2,
        // borderTopColor: 'red',
        marginLeft: 20,
        
    },
    box: {
        width: 120,
        height: 250,
        margin: 5,
        // backgroundColor: '#7f7f7f',
        borderRadius: 8,
        // marginTop: -60
        marginBottom: -50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: '#7a7a7a',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        
        // resizeMode: 'contain'
        // marginHorizontal: 10
    },
    moreMovieImg: {
        width: '100%',
        height: '70%',
        borderRadius: 6,
        resizeMode: "cover",
        marginVertical: 10,
        
    }

})

export default styles