import COLORS from '../../Utils/color_constants';
import {StyleSheet} from 'react-native';

export const drawerStyleSheet = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  headerStyles: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 15,
    paddingTop: 10,
    backgroundColor: COLORS.lightGreen,
  },
  //avatarImageStyles: { borderColor: COLORS.brown, borderWidth: 2 },
  authRowStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  headerTitleStyles: {
    fontSize: 20,
    paddingVertical: 8,
    paddingLeft: 15,
    //fontWeight: "bold",
  },
  authRowElementStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'baseline',
  },
  notAuthRowStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 10,
    marginTop: 10,
  },
  notAuthTextStyles: {
    color: COLORS.orange,
    paddingHorizontal: 3,
    fontSize: 16,
  },
  dividerStyles: {
    backgroundColor: COLORS.darkGreen,
    height: 1,
    marginHorizontal: 4,
  },
  drawerItemView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  langViewStyles: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langItemViewStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
