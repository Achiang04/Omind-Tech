import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import * as Animatable from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {wp, hp} from '../../Reusable/Responsive/dimen';

import Icon from '../../Reusable/Buttons/Icon';
import TextBar from '../../Reusable/TextBar/TextBar';
import Buttons from '../../Reusable/Buttons/Buttons';
import Header from '../../Reusable/Header/Header';
import styles from './RegisStyle';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {regisAction} from '../../redux/Actions/regisAction';

export default function Regis({navigation}) {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('patient');
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(true);
  const [navigator] = useState('');
  const [avoiding, setAvoiding] = useState(false);
  const [indicator, setIndicator] = useState(false);
  const [data, setData] = useState({
    isValidPassword: true,
    isValidPhone: true,
    isValidEmail: true,
  });

  const dispatch = useDispatch();

  const passReg = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
  const phoneReg = /\(?(?:\+62|62|0)(?:\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/;
  const emailReg = /[^@]+@[^\.]+\..+/;

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

  const handleValidPhone = () => {
    if (phone == '') {
      setData({
        ...data,
        isValidPhone: true,
      });
    } else if (phoneReg.test(phone) === false) {
      setData({
        ...data,
        isValidPhone: false,
      });
    } else {
      setData({
        ...data,
        isValidPhone: true,
      });
    }
  };

  let buffer;
  if (indicator) {
    buffer = <ActivityIndicator color={'#1A3150'} size={RFPercentage(2.5)} />;
  } else {
    buffer = <Text>Daftar</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header name={'Registrasi'} />
        <ScrollView>
          <Text style={styles.welcome}>
            Masukkan Data Anda Untuk Membuat Akun
          </Text>

          <ScrollView>
            <View>
              <KeyboardAvoidingView behavior="position" enabled={avoiding}>
                <TextBar
                  title={'Username'}
                  ph={'Masukkan Username Anda'}
                  change={(value) => setName(value)}
                  color={'#C2CDDB'}
                  focus={() => setAvoiding(true)}
                  value={name}
                />
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
                    <Text style={styles.error}>Email Anda Harus Valid</Text>
                  </Animatable.View>
                )}
                <TextBar
                  title={'Nomor Telpon'}
                  ph={'Masukkan Nomor Telpon Anda'}
                  type={'phone-pad'}
                  change={(value) => setPhone(value)}
                  color={'#C2CDDB'}
                  editing={(e) => handleValidPhone(e)}
                  value={phone}
                />
                {data.isValidPhone ? null : (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>Nomor Anda Harus Valid</Text>
                  </Animatable.View>
                )}
                <TextBar
                  title={'Password'}
                  entry={visible}
                  length={35}
                  change={(value) => setPassword(value)}
                  color={'#C2CDDB'}
                  editing={(e) => handleValidPassword(e)}
                  value={password}
                  focus={() => {
                    setAvoiding(true);
                  }}
                  ph={'Masukkan Password Anda'}
                />
                <View style={styles.hide}>
                  <Icon
                    name={show === true ? 'eye-off' : 'eye'}
                    size={wp(20)}
                    color="black"
                    press={() => {
                      setVisible(!visible);
                      setShow(!show);
                    }}
                  />
                </View>
              </KeyboardAvoidingView>
            </View>

            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.error}>
                  Password harus mengandung minimal 6 huruf dan 1 nomor
                </Text>
              </Animatable.View>
            )}

            <Buttons
              width={wp(320)}
              bgColor={'#1F99D3'}
              text={buffer}
              borColor={'#1F99D3'}
              color={'#fff'}
              press={() => {
                setIndicator(true);
                dispatch(regisAction(name, email, phone, role, password)).then(
                  (e) => {
                    console.log(e);
                    if (e) {
                      {
                        navigation.navigate(
                          navigator ? navigator : 'TabScreen',
                        ),
                          setIndicator(false);
                      }
                    } else if (name == '') {
                      setAlert(true),
                        setMessage('Mohon Untuk Mengisi Username'),
                        setIndicator(false);
                    } else if (emailReg.test(email) === false) {
                      setAlert(true),
                        setMessage('Email Tidak Valid'),
                        setIndicator(false);
                    } else if (phoneReg.test(phone) === false) {
                      setAlert(true),
                        setMessage('Nomor Telpon Tidak Valid'),
                        setIndicator(false);
                    } else if (passReg.test(password) === false) {
                      setAlert(true),
                        setMessage('Password Tidak Valid'),
                        setIndicator(false);
                    } else {
                      setIndicator(false);
                    }
                  },
                );
              }}
            />
          </ScrollView>

          <View style={styles.container1}>
            <Text style={styles.text1}>Sudah Punya Akun? Silahkan </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text2}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <AwesomeAlert
          show={alert}
          showProgress={false}
          title="Alert"
          message={message}
          contentContainerStyle={{
            width: wp(275),
            height: wp(150),
          }}
          titleStyle={{fontSize: 25}}
          messageStyle={{fontSize: 20}}
          confirmButtonStyle={{
            width: wp(60),
            height: wp(30),
          }}
          confirmButtonTextStyle={{
            fontSize: 16.5,
            alignSelf: 'center',
          }}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Close"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            setAlert(false);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
