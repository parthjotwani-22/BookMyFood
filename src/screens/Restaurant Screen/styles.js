import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    flex: 0.1,
    backgroundColor: colors.orange,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  restsview: {
    flex: 0.9,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bigwhttext: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.white,
  },
});
