import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {loginAction} from '../../redux/Actions/authAction';
import styles from './LoginStyle';
import Header from '../../Reusable/Header/Header';
import TextBar from '../../Reusable/TextBar/TextBar';
import Icon from '../../Reusable/Buttons/Icon';
import Buttons from '../../Reusable/Buttons/Buttons';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [indicator, setIndicator] = useState(false);
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    isValidPassword: true,
    isValidEmail: true,
  });

  const emailReg = /[^@]+@[^\.]+\..+/;
  const passReg = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
  const dispatch = useDispatch();

  const handleValidEmail = () => {
    if (email == '') {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else if (emailReg.test(email) === false) {
      setData({
        ...data,
        isValidEmail: false,
      });
    } else {
      setData({
        ...data,
        isValidEmail: true,
      });
    }
  };

  const handleValidPassword = () => {
    if (password == '') {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else if (passReg.test(password) === false) {
      setData({
        ...data,
        isValidPassword: false,
      });
    } else {
      setData({
        ...data,
        isValidPassword: true,
      });
    }
  };

  let buffer;
  if (indicator) {
    buffer = <ActivityIndicator color={'#1A3150'} size={RFPercentage(2.5)} />;
  } else {
    buffer = <Text>Masuk</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header name={'Login'} />
        <View>
          <Text style={styles.welcome}>Selamat Datang</Text>
          <TextBar
            title={'Email'}
            ph={'Masukkan Email Anda'}
            type={'email-address'}
            change={(value) => setEmail(value)}
            editing={(e) => handleValidEmail(e)}
            color={'#C2CDDB'}
            value={email}
          />

          {data.isValidEmail ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.error}>Email Tidak Valid</Text>
            </Animatable.View>
          )}
          <View>
            <TextBar
              title={'Password'}
              entry={visible}
              change={(value) => setPassword(value)}
              color={'#C2CDDB'}
              length={35}
              editing={(e) => {
                handleValidPassword(e);
              }}
              value={password}
              ph={'Masukkan Password Anda'}
            />
          </View>
          <View style={styles.hide}>
            <Icon
              name={show === true ? 'eye-off' : 'eye'}
              size={RFPercentage(2.5)}
              color="black"
              press={() => {
                setVisible(!visible);
                setShow(!show);
              }}
            />
          </View>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.error}>Password Tidak Valid</Text>
          </Animatable.View>
        )}
        <Buttons
          width={wp(320)}
          bgColor={'#1F99D3'}
          text={buffer}
          color={'#fff'}
          borColor={'#1F99D3'}
          press={() => {
            dispatch(loginAction(email, password)).then((e) => {
              if (e) {
                navigation.replace('TabScreen');
              } else if (email == '') {
                setAlert(true),
                  setMessage('Mohon Untuk Mengisi Email dan Password');
              } else if (emailReg.test(email) === false) {
                setAlert(true), setMessage('Email Tidak Valid');
              } else if (passReg.test(password) === false) {
                setAlert(true, setMessage('Password Tidak Valid'));
              } else {
                setAlert(true), setMessage('Akun Tidak Valid');
              }
            });
            setIndicator(true),
              dispatch(loginAction(email, password)).then((e) => {
                if (e) {
                  {
                    navigation.navigate('TabScreen'),
                      setIndicator(false),
                      setEmail(''),
                      setPassword('');
                  }
                } else if (email == '') {
                  setAlert(true),
                    setMessage('Mohon Untuk Mengisi Email dan Password'),
                    setIndicator(false);
                } else if (emailReg.test(email) === false) {
                  setAlert(true),
                    setMessage('Email Tidak Valid'),
                    setIndicator(false);
                } else if (passReg.test(password) === false) {
                  setAlert(true),
                    setMessage('Password Tidak Valid'),
                    setIndicator(false);
                } else {
                  setAlert(true), setMessage('Email atau Password Salah');
                  setIndicator(false);
                }
              });
          }}
        />
        <View style={styles.container1}>
          <Text style={styles.text1}>Belum punya akun ? Silahkan </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Regis')}>
            <Text style={styles.text2}>Daftar</Text>
          </TouchableOpacity>
        </View>
        <AwesomeAlert
          show={alert}
          showProgress={false}
          title="Peringatan"
          message={message}
          contentContainerStyle={{
            width: wp(275),
            height: wp(130),
          }}
          titleStyle={{fontSize: 25}}
          messageStyle={{fontSize: 20}}
          confirmButtonStyle={{
            width: wp(60),
            textAlign: 'center',
            height: hp(30),
          }}
          confirmButtonTextStyle={{
            fontSize: RFPercentage(2),
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Close"
          confirmButtonColor="#1F99D3"
          onConfirmPressed={() => {
            setAlert(false);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
