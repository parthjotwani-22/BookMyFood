import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.1,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  body: {
    flex: 0.9,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingBottom: 100,
  },
  smlltxt: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  menucrd: {
    borderColor: colors.black,
    borderWidth: 1,
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
  smlltxt: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '700',
  },
  smllbltxt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  xsmllbltxt: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '700',
  },
  bttmview: {
    height: '100%',
    borderRadius: 10,
    width: '100%',
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
