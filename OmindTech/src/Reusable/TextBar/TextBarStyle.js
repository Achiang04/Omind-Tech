import {StyleSheet} from 'react-native';
import {wp, hp} from '../Responsive/dimen';

const styles = StyleSheet.create({
  inputan: {
    borderWidth: 1,
    width: wp(320),
    height: hp(40),
    alignSelf: 'center',
    paddingLeft: wp(10),
    borderRadius: hp(7),
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
  },
  text: {
    marginTop: hp(20),
    marginBottom: hp(3),
    marginLeft: wp(20),
    alignSelf: 'flex-start',
    color: '#1F99D3',
  },
});

export default styles;
