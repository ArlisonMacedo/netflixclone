import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        
        
    },
    contentContainer: {
        marginTop: -3,
        // flex: 1,
        marginHorizontal: 13
    },
    content: {
        marginTop: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText: {
        color: '#fff',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 17
    },
    contentCard: {
        width: 140,
        height: 250,
        margin: -10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: -50
        
    },
    contentImg: {
        width: 110,
        height: 150,
        borderRadius: 4
    },
    contentCardText: {
        color: '#fff',
        fontSize: 12
    },
    top10: {
        flexDirection: "row",
        marginTop: 10
    },
    gradient: {
        width: '100%',
        height: '40%',
        position: 'absolute',
        zIndex: 9,
        bottom: 0
    }
})

export default styles