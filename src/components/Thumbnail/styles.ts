import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // position: 'relative',
        backgroundColor: '#111',
        // marginBottom: -100,
        height: '10%'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover"
    },
    gradient: {
        width: '100%',
        height: '30%',
        position: 'absolute',
        zIndex: 9,
        bottom: 0
    }

    
})

export default styles