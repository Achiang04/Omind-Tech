import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: wp(20),
    color: 'black',
    marginTop: 10,
  },
  container1: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text1: {
    color: 'black',
    marginTop: wp(10),
  },
  text2: {
    color: '#1F99D3',
    marginTop: hp(10),
    textDecorationLine: 'underline',
  },
  hide: {
    position: 'absolute',
    bottom: hp(9),
    right: wp(30),
  },
  holder: {
    position: 'absolute',
    left: wp(27),
    bottom: hp(14),
    color: '#C2CDDB',
  },
  error: {
    fontSize: 16,
    color: 'red',
    paddingTop: hp(5),
    paddingHorizontal: wp(20),
    paddingLeft: wp(20),
  },
  choose: {
    alignSelf: 'center',
    width: wp(325),
    height: hp(45),
    color: '#C2CDDB',
    borderColor: '#749DD2',
  },
  roleText: {
    marginTop: hp(10),
    marginBottom: hp(5),
    alignSelf: 'flex-start',
    color: '#C2CDDB',
    // paddingVertical: hp(0),
    marginLeft: hp(25),
  },
});

export default styles;
