import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style='auto'/>
    <Stack.Navigator>
    <Stack.Screen name ="Contacts" component={Contacts}/>
    <Stack.Screen name ="Profile" component={Profile}/>
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
