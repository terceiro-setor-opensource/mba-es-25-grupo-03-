import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '~/app/Login';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
