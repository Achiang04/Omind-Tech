import React, {useState} from 'react';
import {View, Text, alert, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Reusable/Header/Header';
import {hp, wp} from '../../Reusable/Responsive/dimen';
import styles from './DiskusiStyle';
import {RFPercentage} from 'react-native-responsive-fontsize';
import ImagePicker from 'react-native-image-picker';
import TextBar from '../../Reusable/TextBar/TextBar';
import DropDownPicker from 'react-native-dropdown-picker';
import Buttons from '../../Reusable/Buttons/Buttons';

export default function Diskusi() {
  const [image, setImage] = useState('');
  const [slider, setSlider] = useState(0);
  const [jenjang, setJenjang] = useState('');

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
        setImage(response);
      }
    });
    console.log('image', image);
  };

  return (
    <View style={styles.container}>
      <Header name={'Buat Grup'} />
      <View style={styles.cameraContainer}>
        <TouchableOpacity onPress={() => chooseImage()}>
          {image === '' ? (
            <View style={styles.camera}>
              <MaterialCommunityIcons
                style={styles.icon}
                name={'camera-plus'}
                color={'#1A3150'}
                size={RFPercentage(5)}
              />
            </View>
          ) : (
            <Image style={styles.grupImage} source={image} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.addFoto}>Tambahkan foto grup</Text>
      <TextBar ph={'Nama Grup'} />
      <View style={[styles.pilihJenjang, {marginBottom: hp(slider)}]}>
        <DropDownPicker
          items={[
            {label: 'SD', value: 'sd'},
            {label: 'SMP', value: 'smp'},
            {label: 'SMK', value: 'smk'},
            {label: 'SMA', value: 'sma'},
          ]}
          style={styles.dropStyle}
          onOpen={() => setSlider(100)}
          onClose={() => setSlider(0)}
          dropDownStyle={{backgroundColor: '#F3F3F3'}}
          activeLabelStyle={{color: 'black'}}
          defaultNull
          labelStyle={styles.labelStyle}
          placeholder="Jenjang"
          containerStyle={{height: hp(40)}}
          onChangeItem={(item) => {
            setJenjang(item.value);
          }}
        />
      </View>
      <Buttons
        text={'Buat Grup'}
        color={'#fff'}
        bgColor={'#1F99D3'}
        borColor={'#1F99D3'}
        width={wp(320)}
      />
    </View>
  );
}
