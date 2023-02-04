import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
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
  bttmview: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    marginTop: 10,
    padding: 10,
    height: 80,
    width: '100%',
  },
  gotocart: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.orange,
    borderRadius: 10,
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
  menucrd: {
    borderColor: colors.black,
    borderWidth: 1,
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
  actmenucrd: {
    borderColor: 'green',
    borderWidth: 5,
    borderRadius: 10,
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
});
