import { StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from "../components/DetailListItem";
import colors from '../utils/colors';



const Profile = () => {
    const route = useRoute();
    const [contact, setContact] = useState({});
    
    const {avatar, name, email, phone, cell} = contact;

    useEffect(() => {
        setContact(route.params);
    }, [contact]);

    
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