import React from 'react'
import { View,Text } from 'react-native'


import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



function HeaderSearch () {

    const {goBack} = useNavigation()

    function handleToGoBack() {
        goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text onPress={handleToGoBack}><Feather name='arrow-left' size={26} color='#fff' /></Text>
                <Text><Feather name='search' size={26} color='#fff' /></Text>
            </View>
        </View>
    )
}

export default HeaderSearch