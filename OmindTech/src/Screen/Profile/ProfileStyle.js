import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    alignSelf: 'center',
    marginVertical: hp(15),
    width: wp(320),
    height: wp(120),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {
    width: wp(75),
    height: hp(80),
    borderRadius: 70,
  },
  info: {
    flexDirection: 'row',
    padding: wp(20),
    paddingLeft: wp(30),
  },
  textContainer: {
    paddingHorizontal: hp(15),
    padding: wp(12.5),
  },
  name: {
    fontSize: RFPercentage(2),
    width: wp(175),
    fontWeight: '700',
  },
  number: {
    fontSize: 14,
    color: '#1A3150',
  },
  edit: {
    position: 'absolute',
    right: wp(20),
    top: wp(25),
  },
  logoutContainer: {
    flexDirection: 'row',
    padding: wp(6),
    paddingLeft: wp(30),
    alignSelf: 'center',
    marginVertical: wp(5),
    width: wp(320),
    height: hp(50),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logout: {
    color: '#1F99D3',
    marginTop: hp(8),
    marginLeft: wp(20),
    fontSize: RFPercentage(2),
  },
});

export default styles;
