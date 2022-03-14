import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import ContactListItem from "../components/ContactListItem";
import {fetchContacts} from "../utils/api";

const keyExtractor =({phone}) => phone;

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(async () => {
        try {
            const contacts = await fetchContacts();
            setContacts(contacts);
            setLoading(false);
            setError(false);
            
        } catch (error) {
            setError(true);
            setLoading(false);
            Alert.alert("Error", error, [
        {
          text: "Cancel",
          onPress: () => console.log(error),
          style: "cancel"
        },
      ])
        }
    }, []);

    const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
    const renderContact = ({item}) => {
        const {name,avatar, phone} = item;

        return (
            <ContactListItem name ={name} avatar ={avatar} phone ={phone} onPress={()=>{}}/>
        );
    }

  return (
    <View style ={styles.container}>
    {loading && <ActivityIndicator size={'large'}/>}
    {error && <Text>Error: {error}</Text>}
    {!loading && !error && (
        <FlatList
        data ={contactsSorted}
        keyExtractor= {keyExtractor}
        renderItem ={renderContact}
        />
        )}
     
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1
    }
})