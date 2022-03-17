import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import React from 'react';
import Contacts from '../screens/Contacts';
import Favorites from '../screens/Favorites';
import User from '../screens/User';
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName= 'Tabs'>
    <Drawer.Screen name ="Contacts" component={Contacts}/>
    <Drawer.Screen name ="Faves" component={Favorites} />
    <Drawer.Screen name ="User" component={User} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

