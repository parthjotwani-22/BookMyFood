import {React, useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {crtFound} from '../../services/redux/CartReducer/action';

const MenuScreen = props => {
  const details = props?.route?.params?.data;
  //console.log(assets.fooditems[3]);
  //console.log(details);
  const [select, setselect] = useState([]);
  const dispatch = useDispatch();
  let act = [];
  const menu = assets.fooditems[details.name];
  console.log(select);
  const [sum, setsum] = useState();
  let tot = 0;
  const data2 = useSelector(value => value.CartReducer);
  useEffect(() => {
    select.map(item => {
      tot = tot + item.price;
    });
    if (!crrData.crtData.length == 0) {
      crrData.crtData.map(item => {
        tot = tot + item.price;
      });
    }
    setsum(tot);
    console.log(sum);
  });
  const crrData = useSelector(value => value.CartReducer);
  //console.log(menu);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.smlltxt}>Menu</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={menu}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                if (select.includes(item)) {
                  act = select;
                  let indexof = act.indexOf(item);
                  act.splice(indexof, 1);
                  console.log(indexof);
                  setselect([...act]);
                } else {
                  act = select;
                  act.push(item);
                  setselect([...act]);
                }
                //(act = select), act.push(item.name), setselect([...act]);
              }}
              style={
                select.includes(item) ? styles.actmenucrd : styles.menucrd
              }>
              <View
                style={{
                  flex: 0.3,
                  overflow: 'hidden',
                  justifyContent: 'center',
                }}>
                <Image
                  source={assets.foodobject}
                  style={{
                    height: '70%',
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />
              </View>
              <View style={{flex: 0.7, justifyContent: 'space-evenly'}}>
                <Text style={styles.smllbltxt}>{item.name}</Text>
                <Text style={styles.xsmllbltxt}>{item.description}</Text>
                <Text style={styles.xsmllbltxt}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* {!select.length == 0 && (
         (!crrData.crtData.length == 0 && ( */}
      <View style={styles.bttmview}>
        <TouchableOpacity
          style={styles.gotocart}
          onPress={() => {
            //let data3 = data2.concat(select);
            dispatch(crtFound(select.concat(data2.crtData)));
            //dispatch(crtFound([]));
            props.navigation.navigate('Cart');
          }}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <Text style={styles.smlltxt}>Pay ${sum}</Text>
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 20,
            }}>
            <Text style={styles.smlltxt}>Cart ></Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* )} */}
    </View>
  );
};

export default MenuScreen;
