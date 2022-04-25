import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userAtom';
import Avatar from '../components/Avatar';
import colors from '../utils/colors';

const Profile = ({ onPress }) => {
    const user = useRecoilValue(userState);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <Avatar />
            </View>
            <View style={styles.userContainer}>
                <Text style={styles.library}>My Music</Text>
                <Text style={styles.user}>{user}</Text>
            </View>

            <TouchableOpacity style={styles.logoutIcon} onPress={onPress}>
                <Ionicons name="log-out-outline" size={32} color="green" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        marginLeft: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    profile: {},
    userContainer: {
        paddingVertical: 5,
        marginLeft: 15,
    },
    user: {
        color: colors.green,
    },
    library: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 3,
    },
    logoutIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20,
    },
});
