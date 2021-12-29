import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'
import React from 'react';
import AppStack from './src/routes/AppStack';
import {useFonts,Nunito_400Regular,Nunito_600SemiBold,Nunito_700Bold} from '@expo-google-fonts/nunito'
import {BebasNeue_400Regular, } from '@expo-google-fonts/bebas-neue'




export default function App() {


  const [fontsLoad] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    BebasNeue_400Regular
  })


  if(!fontsLoad) {
    return <AppLoading />
  }else{
    return (
        <>
          <StatusBar style="light" />
          <AppStack />
        </>
      );
    }
}

