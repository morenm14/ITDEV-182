import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useEffect} from 'react';
import DetailListItem from '../components/DetailListItem';
import colors from '../utils/colors';


const Options = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Options',
            headerLeft: () => <MaterialIcons 
                name="close" 
                size={24} 
                color={colors.black} 
                style ={{marginLeft: 10}} 
                onPress ={() => navigation.goBack()}/>
        });
    }, []);
   
  return (
    <View style = {styles.container}>
      <DetailListItem title='Update Profile'/>
      <DetailListItem title='Change Language'/>
      <DetailListItem title='Sign Out'/>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    }
})