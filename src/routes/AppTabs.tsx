import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'


const {Navigator, Screen} = createBottomTabNavigator()

import ListMovie from '../Screens/ListMovie'
import Download from '../Screens/Download'
import News from '../Screens/News'

function AppTabs () {
    return (
        <Navigator
            screenOptions={{
                tabBarStyle: {
                    elevation: 0,
                    shadowOpacity:0.5,
                    // height: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000',
                    borderTopWidth: 0
                },
                tabBarIconStyle: {
                    flex: 0,
                    width: 60,
                    height: 30
                },
                tabBarLabelStyle: {
                    fontFamily: 'Nunito_400Regular',
                    fontSize: 9,
                    color: '#fff'
                    // marginLeft: 16
                },
                headerShown: false,
                tabBarActiveBackgroundColor: '',
                tabBarActiveTintColor: '',
                
            }}
        >
            <Screen name='ListMovie' component={ListMovie} options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({color, size, focused}) => {
                    return (
                        <MaterialCommunityIcons name='home-variant' size={size} color={focused ? '#E8E8E9' : color} />
                    )
                }
            }} />
            <Screen name='News' component={News} options={{
                tabBarLabel: 'Em breve',
                tabBarIcon: ({color, size, focused}) => {
                    return (
                        <MaterialCommunityIcons name='animation-play-outline' size={size} color={focused ? '#E8E8E9' : color} />
                    )
                }
            }} />
            <Screen name='Download' component={Download} options={{
                tabBarLabel: 'Downloads',
                tabBarIcon: ({color, size, focused}) => {
                    return (
                        <MaterialCommunityIcons name='download-circle-outline' size={size} color={focused ? '#E8E8E9' : color} />
                    )
                }
            }} />
        </Navigator>
    )
}

export default AppTabs