import React, { useEffect, useState } from 'react'
import { View,Text, ScrollView, Image } from 'react-native'
import { StackActions, useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import HeaderSearch from '../../components/HeaderSearch'
import ThumbnailItem from '../../components/Thumbnail'
import axios from 'axios'
import { apiKey, baseUrl, urlImageRecommen } from '../../utils/api'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import {FontAwesome5, Feather} from '@expo/vector-icons'



interface iRoute{
    id: number;
    idTopRated: number;
}

interface Movie {
    id: number
    backdrop_path: string
    title: string
    release_date: string
    adult: boolean
    overview: string
    runtime: string
    
    poster_path: string
    Actors: string
    Director: string
}

interface iMoreMovie {
    id: number
    poster_path: string
    // Title: string
}

function Detail () {
    const route = useRoute()
    const [movie, setMovie] = useState<Movie>({
        id: 0,
        backdrop_path: '',
        title: '',
        release_date: '',
        adult: false,
        overview: '',
        runtime: '',
        
        poster_path: '',
        Actors: '',
        Director: ''
    })
    const [isTvS, setIsTvS] = useState<Boolean>(false)
    const {id,idTopRated} = route.params as iRoute
    const [moreMovies, setMoreMovies] = useState<iMoreMovie[]>([])
    const navigation = useNavigation()
    

    

    useEffect(() => {
        if(idTopRated) {
            axios.get(`${baseUrl}movie/${idTopRated}${apiKey}&language=pt-BR`)
                .then(response => {
                    setMovie(response.data)
                })
                setIsTvS(true)
        } else {

            axios.get(`${baseUrl}movie/${id}${apiKey}&language=pt-BR`)
                .then(response => {   
                    setMovie(response.data)
                })
        }
    },[])


    useEffect(() => {
        if(idTopRated){

            axios.get(`${baseUrl}movie/${idTopRated}/recommendations${apiKey}&language=pt-BR`)
                .then(response => {
                    setMoreMovies(response.data.results)
                })

                setIsTvS(true)
            
        } else {
            axios.get(`${baseUrl}movie/${id}/recommendations${apiKey}&language=pt-BR`)
                .then(response => {
                    setMoreMovies(response.data.results)
                })
        }
    },[])

     function handleGoReaload (idTh: number){
        navigation.dispatch(StackActions.push('Detail', {
            id: idTh
        }))
    }

 return (
    <>
        <HeaderSearch />
    
        <View style={styles.container}>
            
        <View style={styles.content}>
        <ScrollView
                horizontal={false}
                // style={styles.container}
                > 
                
               <ThumbnailItem
                        // Poster=''
                        key={movie.id}
                        backdrop_path={movie.backdrop_path}
                    />
            
            
                    
                
                
                <Text style={styles.title}>{movie.title}</Text>
                
                {/* <Text style={styles.title}>{movie.title}</Text> */}
                <View style={styles.movieIdentify}>
                    <Text style={styles.year}>{movie.release_date}{"   "}</Text>
                    <Text style={styles.rated}>10</Text>
                    <Text style={styles.year}>{"   "}{movie.runtime} min</Text>
                </View>
                <RectButton style={styles.buttonPlayMovie}>
                    <View style={styles.contentButton}>
                        <Text><FontAwesome5 name='play' color='#000' size={17}/></Text>
                        <Text>{"  "}</Text>
                        <Text style={styles.buttonText}>Assistir</Text>
                    </View>
                </RectButton>
                <RectButton style={styles.buttonDownMovie}>
                    <View style={styles.contentButtonDown}>
                        <Text><FontAwesome5 name='download' color='#fff' size={17}/></Text>
                        <Text>{"  "}</Text>
                        <Text style={styles.buttonTextDown}>Baixar</Text>
                    </View>
                </RectButton>
                <View style={styles.plot}>
                    <Text style={styles.textPlot}>{movie.overview}</Text>
                </View>
                <View style={styles.cast}>
                    <Text style={styles.textCast}>Atores: {movie.Actors}</Text>
                    <Text style={styles.textCast}>Direção: {movie.Director}</Text>
                </View>

                <View style={styles.option}>
                    <View style={styles.optionContent}>
                        <View style={styles.optionFormat}>
                            <Text><Feather name='plus' color='#fff' size={20}/>
                            </Text>
                                <Text style={styles.optionText}>Minha lista</Text>
                        </View>
                        <View style={styles.optionFormat}>
                            <Text><Feather name='thumbs-up' color='#fff' size={20}/>
                            </Text>
                                <Text style={styles.optionText}>Classifique</Text>
                        </View>
                        <View style={styles.optionFormat}>
                            <Text><Feather name='share-2' color='#fff' size={20}/>
                            </Text>
                                <Text style={styles.optionText}>Compartilhe</Text>
                        </View>
                        
                    </View>
                </View>
                
                
                <View style={styles.moreMovie}>
                    <View style={styles.lineFocus}></View>
                    <Text style={styles.recomments}>opções semelhantes</Text>
                    <View style={styles.row}>
                        {
                            moreMovies.map(moreMovie => {
                                return (
                                    <TouchableOpacity activeOpacity={0.6} key={moreMovie.id} onPress={ () => handleGoReaload(moreMovie.id)}>
                                        <View style={styles.box}>
                                            {/* <Text>{moreMovie.id}</Text> */}
                                            <Image
                                                source={{uri: `${urlImageRecommen}${moreMovie.poster_path}`}}
                                                style={styles.moreMovieImg}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                        
                    </View>
                </View>
                
            </ScrollView>
            </View>
        
        </View> 
    </>
 )   
}


export default Detail