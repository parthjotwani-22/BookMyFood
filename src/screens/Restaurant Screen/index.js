import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';

const RestaurantScreen = props => {
  //const [resta, setresta] = useState([]);
  const details = props?.route?.params?.data;
  const rests = assets.restaurants.filter(item => {
    return details.restaurants.includes(item.id);
  });
  //   useEffect(() => {
  //     assets.restaurants.map(item => {
  //       if (details.restaurants.includes(item.id)) {
  //         rests.push(item);
  //         setresta(rests);
  //       }
  //     });
  //   }, []);

  console.log(rests);
  console.log(details);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bigwhttext}>
          Choose From Given Restaurants To Order
        </Text>
      </View>
      <View style={styles.restsview}>
        <FlatList
          data={rests}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Menu', {data: item});
              }}
              style={{
                backgroundColor: colors.white,
                borderColor: colors.black,
                borderWidth: 1,
                height: 150,
                marginVertical: 20,
                borderRadius: 20,
                width: '100%',
                flexDirection: 'row',
              }}>
              <View style={{flex: 0.4, padding: 10}}>
                <Image
                  style={{height: '100%', width: '100%', borderRadius: 15}}
                  source={item.img}></Image>
              </View>
              <View
                style={{
                  flex: 0.7,
                  padding: 15,
                  justifyContent: 'space-evenly',
                }}>
                <Text style={styles.smlltxt}>{item.name}</Text>
                <Text style={styles.xsmlltxt}>Type :{item.type}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default RestaurantScreen;
