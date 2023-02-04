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
    alignItems: 'center',
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
  menucrd: {
    borderColor: colors.black,
    borderWidth: 1,
    height: 150,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
  },
  body: {
    flex: 0.9,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
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
