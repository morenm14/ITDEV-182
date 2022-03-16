import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React,{useState, useEffect} from 'react';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utils/colors';
import { fetchUserContact } from '../utils/api';

const User = ({navigation}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(async () => {
        try {
           const user = await fetchUserContact();
           setUser(user);
           setLoading(false);
           setError(false);
            
        } catch (error) {
            setLoading(false);
            setError(true);
        }
        navigation.setOptions({
            title: "Me",
            headerTintColor: 'white',
            headerStyle :{
                backgroundColor: colors.blue,
            }
        });
    }, [])

    const {avatar, name, phone} = user;

  return (
    <View style = {styles.container}>
      {loading && <ActivityIndicator size={'large'}/>}
      {error && <Text>Error ...</Text>}

      {!loading && !error && (<ContactThumbnail avatar={avatar} name ={name} phone ={phone} />)}
    </View>
  )
}

export default User

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    }
})