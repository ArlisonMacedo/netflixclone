import React, { useEffect, useState } from 'react'
import { Image, Text, View , TouchableOpacity} from 'react-native'

import {FontAwesome5 as Icon} from '@expo/vector-icons'
import styles from './styles'
import stranger_things from '../../assets/hipper.png'
import { RectButton } from 'react-native-gesture-handler'
import axios from 'axios'
import { apiKey, baseUrl, urlImage } from '../../utils/api'
import { LinearGradient } from 'expo-linear-gradient'


interface iClassfique {
    id: number;
    poster_path: string
    
}

function Hipper () {


    const [movie, setMovie] = useState<iClassfique>({
        id: 0,
        poster_path: '',
        
    })

    useEffect( () => {
        axios.get(`${baseUrl}movie/634649${apiKey}&language=pt-BR`)
            .then(response => {
                setMovie(response.data)
            })
    },[])

    return (
        <View style={styles.container}>
            <View>
                <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                    style={styles.gradient}
                />
                <Image
                 source={{uri: `${urlImage}${movie.poster_path}`}}
                 style={styles.hipperImage}
                 key={movie.id}
                />
                
               
                <View style={styles.footHipper}>
                    <TouchableOpacity 
                        // style={styles.iconHipper}
                        activeOpacity={0.7}
                        
                    >
                        <View style={styles.myList}>
                            <Icon name='plus' size={27} color='#fff' />
                            <Text style={styles.textMyList}>Minha lista</Text>
                        </View>
                    </TouchableOpacity>
                    <RectButton style={styles.buttonHipper}>
                        <View style={styles.buttonContent}>
                            <Text><Icon name='play' size={20} color='#000'/></Text>
                            <Text style={styles.textHipper}>Assistir</Text>
                        </View>
                    </RectButton>
                    <TouchableOpacity 
                        activeOpacity={0.7}
                    >
                        <View style={styles.myList}>
                            <Icon name='info-circle' size={27} color='#fff' />
                            <Text style={styles.textMyList}>Detalhes</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default Hipper