import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../../utils/screens';

const Stack = createNativeStackNavigator();

const StackNavigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={screens.StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={screens.SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={screens.LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirmation"
          component={screens.ConfirmationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={screens.CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={screens.MenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RestaurantScreen"
          component={screens.RestaurantScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelFoodCourt"
          component={screens.SelectFoodCourt}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Done"
          component={screens.DoneScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
