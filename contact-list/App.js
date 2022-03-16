import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './screens/Favorites';
import User from './screens/User';
import TabNavigator from './components/TabNavigator';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <Stack.Navigator initialRouteName='Tabs'>
        <Stack.Screen name ="Contacts" component={Contacts}/>
        <Stack.Screen name ="Profile" component={Profile} options={{headerBackTitleVisible: false}} />
        <Stack.Screen name ="Favorites" component={Favorites} />
        <Stack.Screen name ="User" component={User} />
        <Stack.Screen name='Tabs' component={TabNavigator} options={{headerShown: false} }/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
