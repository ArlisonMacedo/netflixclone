import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Image, Text } from 'react-native'
import { urlImage } from '../../utils/api'


import styles from './styles'
// import vikings from '../../assets/vikings.png'

interface Thumbnail {
    id?: string
    backdrop_path?: string
    
}

// interface ThumbnailProps {
//     thumbnail: Thumbnail
// }



const ThumbnailItem: React.FC<Thumbnail> = (Thumbnail) =>{
    return (
        <View style={styles.container}>
            {
                Thumbnail.backdrop_path ?
                <Image  key={Thumbnail.id}
                    source={{uri: `${urlImage}${Thumbnail.backdrop_path}`}}
                    style={styles.image}
                    
                />
                : <></>
            }
            {/* <Text style={{color: 'white'}}>sdh</Text> */}
            <LinearGradient 
                    style={styles.gradient}
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                />
        </View>
    )
}

export default ThumbnailItem