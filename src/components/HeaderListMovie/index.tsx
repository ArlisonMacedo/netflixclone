import React, { useEffect, useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'
import iconLogo from '../../assets/iconLogo.png'
import { LinearGradient } from 'expo-linear-gradient'

// import { RectButton } from 'react-native-gesture-handler'




function HeaderListMovie() {

    


    return (
        <LinearGradient style={styles.container} colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
            < View
                
                style={styles.header}
            >
                <Image
                    source={iconLogo}
                    style={styles.iconLogo}
                />
                <TouchableOpacity
                    activeOpacity={0.3}
                >
                    <Text style={styles.textHeader}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.3}
                >
                    <Text style={styles.textHeader}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.3}
                >
                    <Text style={styles.textHeader}>Minha Lista</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}


export default HeaderListMovie