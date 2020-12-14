import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'pink',
  },
  welcome: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    marginLeft: wp(20),
    color: 'black',
    marginTop: hp(50),
  },
  forgot: {
    color: '#FDCB5A',
    alignSelf: 'flex-end',
    marginRight: hp(15),
    marginTop: wp(3),
    marginBottom: wp(30),
    textDecorationLine: 'underline',
  },
  container1: {
    flexDirection: 'row',
    marginTop: hp(13),
    alignSelf: 'center',
  },
  text1: {
    color: 'black',
    fontSize: RFPercentage(1.6),
  },
  text2: {
    color: '#1F99D3',
    fontSize: RFPercentage(1.6),
    textDecorationLine: 'underline',
  },
  hide: {
    position: 'absolute',
    bottom: hp(12),
    right: wp(35),
  },
  error: {
    fontSize: RFPercentage(1.5),
    color: 'red',
    marginTop: hp(5),
    marginLeft: wp(20),
  },
  keyboardAvoid: {
    position: 'absolute',
    bottom: -100,
  },
});

export default styles;
