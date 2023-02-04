import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  lrgtxt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
  },
  headview: {flex: 0.4, justifyContent: 'center', alignItems: 'center'},
  midtextview: {flex: 0.3, alignItems: 'center'},
  bttmview: {flex: 0.3, justifyContent: 'center', alignItems: 'center'},
  bttn: {
    backgroundColor: colors.orange,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  smlltxt: {
    color: colors.white,
    fontSize: 15,
  },
  smllblacktxt: {
    color: colors.black,
    fontSize: 15,
  },
});
