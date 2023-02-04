import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';

const SelectFoodCourt = props => {
  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
      <View style={styles.headview}>
        <Text style={styles.lrgtxt}>Find Food Courts Near You</Text>
        <TextInput style={styles.inp} placeholder="Enter Location"></TextInput>
      </View>
      <View style={styles.optionsview}>
        <FlatList
          data={assets.foodcourts}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('RestaurantScreen', {data: item});
              }}
              style={{
                backgroundColor: colors.white,
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
                <Text style={styles.smlltxt}>{item.location}</Text>
                <Text style={styles.xsmlltxt}>Timing {item.time}</Text>
              </View>
            </TouchableOpacity>
          )}></FlatList>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default SelectFoodCourt;
