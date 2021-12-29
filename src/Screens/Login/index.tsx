import React, { useEffect, useState } from 'react'
import { Image, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    Platform, TouchableWithoutFeedback, 
    Keyboard, 
    TextInput, 
    Alert} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {StackActions, useNavigation} from '@react-navigation/native'

import axios from 'axios'
import { baseApiLogin } from '../../utils/api'


// syltes
 import styles from './styles'
 import Header from '../../components/Header'



 
 
 
 
 function Login() {
     
    const navigation = useNavigation()
    
    const [username, setUsername] = useState('')
    const [passwd, setPasswd] = useState('')


    const checkLogin = async () => {
        const user = await AsyncStorage.getItem('@user')
        if(user) {
            navigation.dispatch(StackActions.replace('Home'))
        }
    }
    
    useEffect(() => {
        checkLogin()
    },[])





    async function login () {
        const data = {
            username,
            passwd
        }
        const response = await axios.post(`${baseApiLogin}/users/login`, data)

        if(response.data){
            if(response.data.message){
                Alert.alert('Opp!','Usuario não existe')
            } else {
                const username = response.data.username
                await AsyncStorage.setItem('@user', username)
                navigation.dispatch(StackActions.replace('Home'))
            }
        }
    }

    function handleGoToSignUp() {
        navigation.dispatch(StackActions.push('SignUp'))
    }

    return (
       <View style={styles.container}>           
            <Header />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios'? 'padding': 'height'}
                style={styles.session}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
                    <View style={styles.inner}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder='Email ou número de telefone' 
                            autoCapitalize='none'
                            placeholderTextColor='#A6A297'
                            onChangeText={text => {setUsername(text)}}
                        />
                        <TextInput 
                            style={styles.textInput} 
                            placeholder='Senha' 
                            placeholderTextColor='#A6A297'
                            onChangeText={text => {setPasswd(text)}}
                        />
                        <RectButton style={styles.button} onPress={login}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </RectButton>

                        <Text style={styles.textFeet}>Precisa de ajuda?</Text>
                        <Text style={styles.textFeet} onPress={handleGoToSignUp} >Novo por aqui? Inscreva-se agora</Text>
                        
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
       </View> 
    )
}


export default Login