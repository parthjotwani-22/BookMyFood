import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  lrgtxt: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '700',
  },
  smlltxt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  xsmlltxt: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '400',
  },
  headview: {
    flex: 0.15,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  optionsview: {
    flex: 0.85,
    backgroundColor: colors.orange,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inp: {
    backgroundColor: colors.lightgrey,
    height: 35,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
});
