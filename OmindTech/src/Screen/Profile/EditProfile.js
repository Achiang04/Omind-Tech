import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import RadioForm from 'react-native-simple-radio-button';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import styles from './EditProfileStyle';
import Header from '../../Reusable/Header/Header';
import TextBar from '../../Reusable/TextBar/TextBar';
import Button from '../../Reusable/Buttons/Buttons';
import {wp, hp} from '../../Reusable/Responsive/dimen';

export default function EditProfile() {
  const [image, SetImage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city] = useState('');
  const [address] = useState('');
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState('');
  const [userData, setUserData] = useState('');
  const [indicator, setIndicator] = useState(false);

  const radio_props = [
    {label: 'Male', value: 1},
    {label: 'Female', value: 0},
  ];

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const chooseImage = () => {
    let options = {
      title: 'Select Avatar',
      cameraType: 'front',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        SetImage(response);
      }
    });
  };

  const handleEdit = async () => {
    try {
      const form = new FormData();

      form.append('name', name);
      form.append('phone', phone);
      form.append('gender', gender);
      form.append('city', city);
      form.append('address', address);
      form.append('email', email);
      form.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
      const token = await AsyncStorage.getItem('userToken');
      const response = await Axios.put(
        'https://vet-booking.herokuapp.com/user/edit',
        form,
        {
          headers: {access_token: token, 'Content-Type': 'multipart/form-data'},
        },
      )
        .then((r) => {
          return r;
        })
        .catch((e) => {
          return e;
        });
      setIndicator(false);
      navigation.replace('TabScreen', {screen: 'ProfileScreen'});
    } catch (error) {}
  };

  useEffect(() => {
    async function setProfile() {
      const value = await AsyncStorage.getItem('userToken');
      try {
        const response = await Axios.get(
          'https://vet-booking.herokuapp.com/user/edit',
          {
            headers: {
              access_token: value,
            },
          },
        );
        setUserData(response.data.data.user);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    setProfile();
  }, []);

  let loader;
  if (loading) {
    loader = <ActivityIndicator color={'#1F99D3'} size={35} />;
  }

  let buffer;
  if (indicator) {
    buffer = <ActivityIndicator color={'#1A3150'} size={RFPercentage(2.5)} />;
  } else {
    buffer = <Text>Submit Perubahan</Text>;
  }

  return (
    <View style={styles.container}>
      <Header name="Edit Profile" icon="arrow-left" press={handleBack} />
      {loader}
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.text}>Data Anda</Text>
        </View>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={chooseImage}>
            <Image
              style={styles.profile}
              source={image ? {uri: image.uri} : {uri: userData.image}}
            />
            <MaterialCommunityIcons
              style={styles.icon}
              name={'camera-plus'}
              color={'black'}
              size={wp(30)}
            />
          </TouchableOpacity>
        </View>
        <TextBar
          title={'Nama Lengkap'}
          ph={userData.name}
          entry={false}
          color="#000"
          change={(value) => setName(value)}
          value={name}
        />
        <Text style={styles.gender}>Jenis Kelamin</Text>
        <RadioForm
          style={styles.selector}
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          buttonColor="#1F99D3"
          selectedButtonColor="#1F99D3"
          buttonSize={wp(10)}
          onPress={(value) => {
            {
              setGender(value);
              if (value === 1) {
                setGender(true);
              } else {
                setGender(false);
              }
            }
          }}
        />
        <View style={styles.box1}>
          <Text style={styles.text}>Kontak Detail</Text>
        </View>
        <TextBar
          title={'Nomor Telpon'}
          ph={userData.phone}
          entry={false}
          color="#000"
          change={(value) => setPhone(value)}
          value={phone}
          type={'phone-pad'}
        />
        <TextBar
          title={'Email'}
          ph={userData.email}
          entry={false}
          color="#000"
          change={(value) => setEmail(value)}
          value={email}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.submitButton}>
          <Button
            text={buffer}
            bgColor="#1F99D3"
            borColor="#1F99D3"
            color="#fff"
            width={wp(325)}
            press={handleEdit}
          />
        </View>
      </View>
    </View>
  );
}
