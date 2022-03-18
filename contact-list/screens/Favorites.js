import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { fetchContacts } from "../utils/api";
import ContactThumbnail from "../components/ContactThumbnail";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
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
    }
    navigation.setOptions({
      title: "Faves",
      headerLeft: () => (
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color={colors.blue}
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate("Contacts")}
        />
      ),
    });
  }, []);

  const favorites = contacts.filter((contact) => contact.favorite);

  const renderFavoriteThumbnail = ({ item }) => {
    const { name, avatar, phone, cell, email } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() =>
          navigation.navigate("Profile", { name, avatar, phone, cell, email })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>{error}</Text>}

      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
  list: {
    alignItems: "center",
  },
});
