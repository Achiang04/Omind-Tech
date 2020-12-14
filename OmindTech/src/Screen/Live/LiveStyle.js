import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: wp(320),
    alignSelf: 'center',
    height: hp(200),
    marginTop: hp(20),
  },
});

export default styles;
