import {StyleSheet} from 'react-native';
import {wp, hp} from '../Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    height: wp(45),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(31,153,211)',
  },
  name: {
    fontSize: RFPercentage(2.5),
    color: 'white',
    fontWeight: 'bold',
    marginLeft: hp(15),
  },
  icon: {
    marginLeft: hp(15),
  },
});

export default styles;
