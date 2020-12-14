import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import styles from './ProfileStyle';
import Header from '../../Reusable/Header/Header';
import Icon from '../../Reusable/Buttons/Icon';
import {wp} from '../../Reusable/Responsive/dimen';

export default function ProfileScreen() {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const handleLogout = () => {
    AsyncStorage.removeItem('userToken'), navigation.navigate('Login');
  };

  const handleEdit = () => {
    navigation.navigate('EditProfile');
  };

  useEffect(() => {
    async function setProfile() {
      const value = await AsyncStorage.getItem('userToken');
      try {
        const response = await axios.get(
          'https://vet-booking.herokuapp.com/user/edit',
          {
            headers: {
              access_token: value,
            },
          },
        );
        setUserData(response.data.data.user);
        setLoading(false);
      } catch (error) {}
    }
    setProfile();
  }, []);

  let loader;
  if (loading) {
    loader = <ActivityIndicator color={'#1F99D3'} size={35} />;
  }

  return (
    <View style={styles.container}>
      <Header name="Profile" />
      {loader}
      <View style={styles.card}>
        <View style={styles.info}>
          <Image style={styles.image} source={{uri: userData.image}} />
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {userData.name}
            </Text>
            <Text style={styles.number}>{userData.phone}</Text>
          </View>
          <View style={styles.edit}>
            <Icon name="pencil" size={wp(25)} color="#000" press={handleEdit} />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.logoutContainer}>
          <Ionicons name="exit-outline" size={wp(30)} color="#1A3150" />
          <Text style={styles.logout}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
