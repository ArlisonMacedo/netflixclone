import React from "react";
import { View,Text, Image } from "react-native";
import {Feather} from '@expo/vector-icons'


import styles from './styles'
import logo from '../../assets/pngwing.com.png'


function Header () {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.iconBack}><Feather name='arrow-left' size={26} color="#fff" /></Text> */}
               <Image 
                    source={logo}
                    style={styles.logo}
               />
        </View>
    )
}

export default Header