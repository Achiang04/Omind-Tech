import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
  },
  image: {
    width: wp(200),
    height: hp(100),
    resizeMode: 'contain',
  },
  text1: {
    color: '#FDCB5A',
    fontSize: 25,
    opacity: 0.9,
  },
  text2: {
    color: '#FDCB5A',
    alignSelf: 'center',
    opacity: 0.8,
  },
});

export default styles;
