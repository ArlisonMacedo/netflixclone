import React from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../../components/Header'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import {StackActions, useNavigation} from '@react-navigation/native'


function Landing (){


    const {dispatch} = useNavigation()
    function handleGoToHome () {
        dispatch(StackActions.push('Home'))
    }


    return (
        <ImageBackground 
            style={styles.container}
            source={{uri: 'http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg'}}
        >
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <LinearGradient 
                colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
                style={styles.gradient}
            />
            
            <View style={styles.content}>
                {/* <View> */}
                    <Text style={styles.TextLanding1}>Filmes, séries e muito mais, sem limites</Text>
                    <Text style={styles.TextLanding2}>Assista onde quiser. Cancele quando quiser.</Text>
                {/* </View> */}

                <RectButton style={styles.button} onPress={handleGoToHome}>
                    <Text style={styles.textButton}>
                       VAMOS LÁ 
                    </Text>
                </RectButton>
            </View>
                <LinearGradient 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                    style={styles.gradientFeet}
                />    
            
        </ImageBackground>
    )
}

export default Landing