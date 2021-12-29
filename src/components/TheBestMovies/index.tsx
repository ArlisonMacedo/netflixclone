import React  from 'react'

import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {StackActions, useNavigation} from '@react-navigation/native'


// import thumb from '../../assets/hipper.png'
import { urlImageRecommen } from '../../utils/api'
import styles from './styles'

export interface iMovie {
    id: number;
    poster_path: string;
}

interface MovieProps {
    movie: iMovie
}

const TheBestMovies: React.FC<MovieProps> = ({movie}) => {

    const {dispatch} = useNavigation()

    function handleGoTvDetail (idTopRated: number) {
        dispatch(StackActions.push('Detail', {
            idTopRated: idTopRated
        }))
    }

    return (
        <View 
            style={styles.container}
            // horizontal={true}
        >
            <TouchableOpacity key={movie.id} onPress={() => handleGoTvDetail(movie.id)}>
                <Image 
                    source={{uri: `${urlImageRecommen}${movie.poster_path}`}}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    )
}


export default TheBestMovies