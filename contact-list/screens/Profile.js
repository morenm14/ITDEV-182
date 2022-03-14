import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from "../components/DetailListItem";
import { fetchRandomContact } from '../utils/api';
import colors from '../utils/colors';

const Profile = () => {
    const [contact, setContact] = useState({});
    const {avatar, name, email, phone, cell}= contact;

    useEffect(async () => {
        const randContact  = await fetchRandomContact();
        setContact(randContact);
    }, []);

    
  return (
    <View style = {styles.container}>
      <View style ={styles.avatarSection}>
      <ContactThumbnail avatar={avatar} name = {name} phone ={phone} textColor={'white'}/>
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