import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    borderWidth: 1,
    width: wp(320),
    alignSelf: 'center',
    marginTop: hp(20),
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F4F4F4',
    borderColor: '#F4F4F4',
  },
  header: {
    marginBottom: hp(20),
  },
});

export default styles;
