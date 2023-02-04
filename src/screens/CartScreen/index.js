import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../utils/colors';
import styles from './styles';
import assets from '../../utils/assets';
import {crtFound} from '../../services/redux/CartReducer/action';

const CartScreen = props => {
  const crtdata = useSelector(value => value.CartReducer);
  const perdata = useSelector(value => value.PersonReducer);
  console.log(perdata);
  //console.log(crtdata);
  //console.log(crtdata);
  const dispatch = useDispatch();
  console.log(crtdata.crtData);
  const data2 = crtdata.crtData;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.smlltxt}>Cart</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data2}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.menucrd}>
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
                <Text style={styles.xsmllbltxt}>{item.restaurant}</Text>
                <TouchableOpacity
                  onPress={() => {
                    let indexof = data2.indexOf(item);
                    data2.splice(indexof, 1);
                    console.log(indexof);
                    dispatch(crtFound(data2));
                  }}
                  style={{
                    backgroundColor: colors.lightred,
                    height: 20,
                    position: 'absolute',
                    width: 20,
                    right: 20,
                    bottom: 20,
                  }}></TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: 60,
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={styles.bttmview}
          onPress={() => {
            props.navigation.navigate('Confirmation');
          }}>
          <Text style={styles.smlltxt}>Proceed To Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
