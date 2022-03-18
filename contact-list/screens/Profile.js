import { StyleSheet, View } from 'react-native';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from "../components/DetailListItem";
import colors from '../utils/colors';

const Profile = ({navigation, route}) => {
    const [contact, setContact] = useState({});
    const {avatar, name, email, phone, cell} = contact;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name?.split(" ")[0],
            headerTintColor: 'white',

            headerStyle: {
                backgroundColor: colors.blue,
            }
        });
    }, [name]);

    useEffect(() => {
        setContact(route.params);
    }, []);

    
  return (
    <View style = {styles.container}>
      <View style ={styles.avatarSection}>
      <ContactThumbnail avatar={avatar} name = {name} phone ={phone}/>
      </View>
      <View style ={styles.detailsSection}>
      <DetailListItem icon= "mail" title ="Email" subtitle= {email}/>
      <DetailListItem icon= "phone" title ="Work" subtitle= {phone}/>
      <DetailListItem icon= "smartphone" title ="Personal" subtitle= {cell}/>
      </View>
    </View>
    
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white'
    }
})