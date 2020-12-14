import {StyleSheet} from 'react-native';
import {wp, hp} from '../Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 7,
    alignSelf: 'center',
    padding: hp(10),
    marginTop: hp(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
  },
});

export default styles;
