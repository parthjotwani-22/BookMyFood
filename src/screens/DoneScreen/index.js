import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../utils/colors';

const DoneScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          textAlign: 'center',
          color: colors.white,
        }}>
        Your Order is Confirmed
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SelFoodCourt');
        }}
        style={{
          position: 'absolute',
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 10,
          right: 20,
          bottom: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Next ></Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoneScreen;
