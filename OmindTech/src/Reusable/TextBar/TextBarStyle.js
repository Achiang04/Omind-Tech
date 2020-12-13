import {StyleSheet} from 'react-native';
import {wp, hp} from '../Responsive/dimen';

const styles = StyleSheet.create({
  inputan: {
    borderWidth: 1,
    width: wp(320),
    height: hp(40),
    marginTop: hp(35),
    alignSelf: 'center',
    paddingLeft: wp(10),
    borderRadius: hp(7),
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
  },
});

export default styles;
