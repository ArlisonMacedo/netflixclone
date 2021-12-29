import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'


// import Login from '../Screens/Login/'
// import ListMovie from '../Screens/ListMovie'
import AppTabs from './AppTabs'
import Detail from '../Screens/Detail'
import SignUp from '../Screens/SignUp'
import Landing from '../Screens/Landing'

const {Navigator, Screen} = createNativeStackNavigator()

function AppStack () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                
            }}>
                <Screen name='Landing' component={Landing} />
                <Screen name='Home' component={AppTabs} />
                <Screen name='Detail' component={Detail} />
                <Screen name='SignUp' component={SignUp} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack