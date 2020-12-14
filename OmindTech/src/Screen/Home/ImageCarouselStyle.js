import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paginationDot: {
    width: wp(7.5),
    height: wp(7.5),
    borderRadius: 50,
    marginTop: wp(-7),
    marginHorizontal: hp(0),
  },
  item: {
    alignSelf: 'center',
    width: wp(260),
    height: wp(135),
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: 0,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    backgroundColor: '#1A3150',
  },
});

export default styles;
