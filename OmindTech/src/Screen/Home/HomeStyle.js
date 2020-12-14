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
    width: wp(120),
    alignSelf: 'center',
    marginTop: hp(20),
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F4F4F4',
    borderColor: '#F4F4F4',
    marginRight: wp(10),
  },
  container1Press: {
    borderWidth: 1,
    width: wp(120),
    alignSelf: 'center',
    marginTop: hp(20),
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#1F99D3',
    borderColor: '#1F99D3',
    marginRight: wp(10),
  },
  header: {
    marginBottom: hp(20),
  },
  text: {
    marginLeft: wp(20),
    fontSize: RFPercentage(2.3),
    fontWeight: 'bold',
  },
});

export default styles;
