import {React, useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../utils/colors';
import {crtFound} from '../../services/redux/CartReducer/action';
//import { TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

const ConfirmationScreen = props => {
  const cart = useSelector(value => value.CartReducer);
  const dispatch = useDispatch();
  const pers = useSelector(value => value.PersonReducer);
  console.log(pers);
  let tot = 0;
  const [sum, setsum] = useState(0);
  console.log(cart);
  useEffect(() => {
    if (!cart.crtData.length == 0) {
      cart.crtData.map(item => {
        tot = tot + item.price;
      });
    }
    setsum(tot);
    //console.log(sum);
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.smlltxt}>Order Sumary</Text>
      </View>
      <View style={styles.body}>
        <View style={{flex: 0.5}}>
          <FlatList
            data={cart.crtData}
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
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{flex: 0.3}}>
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: colors.black,
            }}></View>
          <View style={{padding: 10}}>
            <View style={{width: '100%', marginVertical: 10}}>
              <Text style={styles.smllbltxt}>Contact Details:</Text>
              <Text>{pers.perData.email}</Text>
              <Text>{pers.perData.phone}</Text>
            </View>

            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: colors.black,
              }}></View>

            <View style={{width: '100%', marginVertical: 10}}>
              <Text style={styles.smllbltxt}>Total Payable Amount:</Text>
              <Text style={styles.smllbltxt}>{sum}$</Text>
            </View>
          </View>
        </View>
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
            props.navigation.navigate('Done');
            dispatch(crtFound([]));
          }}>
          <Text style={styles.smlltxt}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
