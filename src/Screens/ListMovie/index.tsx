import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderListMovie from '../../components/HeaderListMovie'
import Hipper from '../../components/Hipper'

import {baseUrl,apiKey, urlImage, urlImageRecommen} from '../../utils/api'
import axios from 'axios'

import styles from './styles'

import {StackActions, useNavigation} from '@react-navigation/native'
import TheBestMovies, {iMovie} from '../../components/TheBestMovies'
import { LinearGradient } from 'expo-linear-gradient'

interface Movie {
    id: number;
    poster_path: string
    // title: string
}

interface MovieHiper {
    id: number;
    poster_path: string
}

// interface iPostPath {
//     post_paths: string
// }


function Home() {

    const [movies, setMovies] = useState<Movie[]>([])
    const [moviesHiper, setMoviesHiper] = useState<MovieHiper[]>([])
    const [theBestMovie, setTheBestMovie] = useState([])
    const navigation = useNavigation()
    
    
    async function setList() {
        var pageNumber = 0
        pageNumber = Math.floor(Math.random() * 500) + 1
        await axios.get(`${baseUrl}movie/popular${apiKey}&language=pt-BR&page=${pageNumber}`).then(response => {
            const data = response.data.results
            setMovies(data)
        })
    }

    async function fsetMoviesHiper() {
        await axios.get(`${baseUrl}movie/popular${apiKey}&language=pt-BR&page=1`)
            .then(response => {
                setMoviesHiper(response.data.results)
            })
    }

    useEffect(() => {
        axios.get(`${baseUrl}movie/popular${apiKey}&language=pt-BR&page=3`)
            .then(response => {
                setTheBestMovie(response.data.results)
            })
    },[])

    // function onGoPopulationPoster () {
    //     movies.map(movie => {
    //         setPost_Paths(movie.poster_path)
    //         console.log(post_paths)
    //     })
    // }

    function handleToGoDetail(id: number) {
        navigation.dispatch(StackActions.push('Detail', {
            id: id
        }))
        // console.log(imdbID)
    }

    useEffect(()=> {
        setList()
        fsetMoviesHiper()
        // onGoPopulationPoster()
    },[])

    return (
        <View style={styles.container}>
            <HeaderListMovie />
            <ScrollView
                // scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
            >

            <Hipper />

            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>Populares na Netflix</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                        <View style={styles.content}>
                            {
                                movies.map(movie => {
                                    return (
                                    <TouchableOpacity 
                                        style={styles.contentCard} 
                                        activeOpacity={0.7} key={movie.id}
                                        onPress={() => {handleToGoDetail(movie.id)}}
                                    >
                                        <Image 
                                            source={{uri: `${urlImage}${movie.poster_path}`}}
                                            style={styles.contentImg}
                                        />
                                          
                                    </TouchableOpacity>
                                     )
                                })
                            }
                        </View>

                    </ScrollView>
                </View>

                <Text style={[styles.contentText,{marginLeft: 10}]}>Só Top Netflix</Text>
                <View style={styles.top10}>
                    <ScrollView horizontal={true}>
                    {
                        theBestMovie.map((thebestmovie: iMovie) => {
                            return (
                                <TheBestMovies 
                                    key={thebestmovie.id}
                                    movie={thebestmovie}
                                />
                            )
                        })
                    }
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                        style={styles.gradient}
                    />
                    </ScrollView>

                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>Em alta</Text>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={styles.content}>
                            {
                                moviesHiper.map(movieHiper => {
                                    return (
                                        <TouchableOpacity 
                                        style={styles.contentCard} 
                                        activeOpacity={0.7} key={movieHiper.id}
                                        onPress={() => {handleToGoDetail(movieHiper.id)}}
                                    >
                                        <Image 
                                            source={{uri: `${urlImageRecommen}${movieHiper.poster_path}`}}
                                            style={styles.contentImg}
                                        />
                                          
                                    </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                
            </ScrollView>
        </View>
    )
}

export default Home