import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addFoto: {
    opacity: 0.5,
    alignSelf: 'center',
  },
  camera: {
    alignSelf: 'center',
    padding: hp(20),
    backgroundColor: '#F3F3F3',
    borderRadius: 15,
    opacity: 0.5,
    width: wp(100),
    height: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    marginBottom: hp(15),
    marginTop: hp(50),
  },
  grupImage: {
    width: wp(100),
    height: wp(100),
    backgroundColor: 'black',
    borderRadius: wp(70),
    alignSelf: 'center',
  },
  pilihJenjang: {
    width: wp(150),
    marginLeft: wp(19),
    marginTop: hp(20),
  },
  dropStyle: {
    backgroundColor: '#F3F3F3',
    borderColor: '#F3F3F3',
  },
  labelStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: 'black',
  },
});

export default styles;
