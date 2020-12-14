import {StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    justifyContent: 'center',
    width: 'auto',
    height: wp(35),
    backgroundColor: '#F1F1F1',
  },
  text: {
    textAlign: 'center',
  },
  profileContainer: {
    marginTop: wp(15),
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  profile: {
    width: wp(80),
    height: wp(80),
    borderRadius: wp(70),
  },
  icon: {
    position: 'absolute',
    right: wp(0),
    top: hp(60),
  },
  box1: {
    justifyContent: 'center',
    width: 'auto',
    height: wp(35),
    marginTop: wp(15),
    backgroundColor: '#F1F1F1',
  },
  buttonContainer: {
    width: 'auto',
    height: hp(65),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 15},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  gender: {
    marginLeft: wp(20),
    color: '#1F99D3',
    marginTop: hp(10),
  },
  selector: {
    padding: wp(5),
    right: wp(62),
    justifyContent: 'space-evenly',
  },
  indicator: {
    width: wp(250),
    height: wp(250),
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  submitButton: {
    position: 'absolute',
    bottom: hp(13),
    alignSelf: 'center',
  },
});

export default styles;
