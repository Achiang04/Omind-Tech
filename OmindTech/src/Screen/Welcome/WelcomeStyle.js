import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    marginTop: wp(150),
    marginBottom: wp(50),
    width: wp(200),
    height: wp(200),
    resizeMode: 'contain',
  },
});

export default styles;
