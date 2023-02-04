import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';

const StartScreen = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          top: 0,
          height: 80,
          width: 80,
          borderBottomRightRadius: 20,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.orange,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SelFoodCourt');
          }}
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.smlltxt}>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headview}>
        <Image
          source={assets.bookmyfoodlogo}
          style={{height: 100, resizeMode: 'contain', tintColor: colors.orange}}
        />
        <Text style={styles.lrgtxt}>BookMyFood</Text>
      </View>
      <View style={styles.midtextview}>
        <Text style={styles.smllblacktxt}>Order Food From FoodCourt</Text>
      </View>
      <View style={styles.bttmview}>
        <TouchableOpacity
          style={styles.bttn}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text style={styles.smlltxt}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bttn}>
          <Text style={styles.smlltxt}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;
